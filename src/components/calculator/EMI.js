import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Tool_Footer from "./Tools_footer";
import CalculatorList from './Calulators_List';
import logo from '../../assets/images/logo-for-excel.png'; 
import logo1 from '../../assets/images/logo-for-pdf.png'; 
import ExcelJS from 'exceljs';
import Info from './info/EMI_Info';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(10000.00);
    const [interestRate, setInterestRate] = useState(12.75);
    const [termLength, setTermLength] = useState(9);
    const [firstPaymentDate, setFirstPaymentDate] = useState('2024-01-01');
    const [compoundPeriod, setCompoundPeriod] = useState('Monthly');
    const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
    const [result, setResult] = useState({ payment: "0" });
    const [schedule, setSchedule] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [errors, setErrors] = useState({});

    const compoundPeriodMapping = {
        'Monthly': 12,
        'Semi-Annually': 2,
        'Quarterly': 4,
        'Annually': 1,
    };

    const paymentFrequencyMapping = {
        'Monthly': 12,
        'Semi-Monthly': 24,
        'Bi-Weekly': 26,
        'Weekly': 52,
    };

    const validateForm = () => {
        const validationErrors = {};

        if (loanAmount <= 0) {
            validationErrors.loanAmount = "Loan amount should be greater than 0";
        }

        if (interestRate <= 0) {
            validationErrors.interestRate = "Interest rate should be greater than 0";
        }

        if (termLength <= 0) {
            validationErrors.termLength = "Term Length should be greater than 0";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const calculateEMI = (principal, rate, periods, totalPayments) => {
        const EMI = principal * (rate * Math.pow(1 + rate, totalPayments)) /
            (Math.pow(1 + rate, totalPayments) - 1);
        return EMI;
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const calculatePayment = () => {
        if (!validateForm()) {
            return;
        }

        const P = parseFloat(loanAmount);
        const annualInterestRate = parseFloat(interestRate);
        const years = parseInt(termLength);

        if (isNaN(P) || isNaN(annualInterestRate) || isNaN(years) || P <= 0 || annualInterestRate <= 0 || years <= 0) {
            setResult({ payment: "Invalid Input" });
            setSchedule([]);
            return;
        }

        const periodsPerYear = paymentFrequencyMapping[paymentFrequency] || 12;
        const compoundingPeriodsPerYear = compoundPeriodMapping[compoundPeriod] || 12;
        const totalPayments = years * periodsPerYear;
        const periodicInterestRate = (Math.pow(1 + (annualInterestRate / 100) / compoundingPeriodsPerYear, compoundingPeriodsPerYear / periodsPerYear) - 1);

        const EMI = calculateEMI(P, periodicInterestRate, periodsPerYear, totalPayments);

        let scheduleData = [];
        let balance = P;
        let paymentDate = new Date(firstPaymentDate);

        const getPaymentDateIncrement = () => {
            switch (paymentFrequency) {
                case 'Monthly':
                    return 1;
                case 'Semi-Monthly':
                    return 0.5;
                case 'Bi-Weekly':
                    return 14 / 30;
                case 'Weekly':
                    return 7 / 30;
                default:
                    return 1;
            }
        };

        const incrementPaymentDate = (paymentDate, incrementInMonths) => {
            paymentDate.setMonth(paymentDate.getMonth() + Math.floor(incrementInMonths));
            const remainderDays = (incrementInMonths - Math.floor(incrementInMonths)) * 30;
            paymentDate.setDate(paymentDate.getDate() + remainderDays);
        };

        for (let i = 1; i <= totalPayments; i++) {
            const interestDue = balance * periodicInterestRate;
            const principalPaid = EMI - interestDue;
            balance = Math.max(balance - principalPaid, 0);

            scheduleData.push({
                paymentNo: i,
                // paymentDate: paymentDate.toISOString().split('T')[0],
                paymentDate: formatDate(paymentDate),
                interestRate: annualInterestRate.toFixed(2) + '%',
                interestDue: interestDue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                paymentDue: EMI.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                principalPaid: principalPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                balance: balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    
                // taxReturned: "0",
                // cumulativeTaxReturned: "0"
            });

            // Increment payment date based on payment frequency
            incrementPaymentDate(paymentDate, getPaymentDateIncrement());
        }

        setResult({ payment: EMI.toFixed(2) });
        setSchedule(scheduleData);
    };


    useEffect(() => {
        calculatePayment();
    }, [loanAmount, interestRate, termLength, paymentFrequency, firstPaymentDate, compoundPeriod]);

    const exportToPDF = () => {
        const doc = new jsPDF();
    
        // Logo dimensions and new margin settings
        const logoWidth = 15;
        const logoHeight = 23;
        const marginTop = 10; // New top margin
        const marginLeft = 5; // New left margin
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
    
        // Function to add the header on the first page
        const addHeader = () => {
            // Add Logo on the left side with the new margin
            doc.addImage(logo1, 'PNG', marginLeft, marginTop, logoWidth, logoHeight);
    
            // Add the issue date in bold, italic, and colored format on the top right corner
            const issueDate = `Issue Date: ${new Date().toLocaleDateString()}`;
            doc.setFontSize(10);
            doc.setFont("helvetica", "bolditalic"); // Bold and italic
            doc.setTextColor(0, 102, 204); // Blue color
    
            // Set the Y position of the issue date to align with the bottom of the logo
            const issueDateYPosition = marginTop + logoHeight - 2; // Slightly adjust for better alignment
    
            // Add the issue date text to the top right of the page
            doc.text(issueDate, pageWidth - doc.getTextWidth(issueDate) - 10, issueDateYPosition);
    
            // Add Title with red background in the center
            const titleText = 'EMI Payment Sheet';
            const titleWidth = doc.getTextWidth(titleText);
            const titleX = (pageWidth - titleWidth) / 2;
    
            // Draw red background bar for title
            doc.setFillColor(128, 0, 0); // Dark red
            doc.rect(0, marginTop + logoHeight, pageWidth, 12, 'F'); // Full width rectangle
    
            // Add Title Text in the center of the red background
            doc.setTextColor(255, 255, 255); // White text
            doc.setFontSize(12);
            doc.text(titleText, titleX, marginTop + logoHeight + 9); // Position text inside the red bar
    
            // Reset text color and font for the rest of the document
            doc.setTextColor(0, 0, 0);
            doc.setFont("helvetica", "normal"); // Reset font style
        };
    
        // Function to add the centered, transparent watermark
        const addWatermark = () => {
            const watermarkText = 'finwiseschool.com';
    
            // Set font size and transparency
            doc.setFontSize(50);
            doc.setTextColor(150, 150, 150); // Light gray for the watermark
    
            // Set transparency level for the watermark (1 = fully opaque, 0 = fully transparent)
            doc.setGState(new doc.GState({ opacity: 0.1 })); // Light transparent
    
            // Calculate the center of the page
            const xPosition = pageWidth / 1.8;
            const yPosition = pageHeight / 1.6;
    
            // Add the watermark text diagonally in the center
            doc.text(watermarkText, xPosition, yPosition, { angle: 45, align: 'center' });
    
            // Reset transparency for other content
            doc.setGState(new doc.GState({ opacity: 1 }));
        };
    
        // Add the table
        const tableColumn = ["Payment No", "Payment Date", "Interest Rate", "Interest Due", "Payment Due", "Principal Paid", "Balance"];
        const tableRows = schedule.map(row => [
            row.paymentNo,
            row.paymentDate,
            row.interestRate,
            row.interestDue,
            row.paymentDue,
            row.principalPaid,
            row.balance,
        ]);
    
        const startY = marginTop + logoHeight + 20;
    
        // Add header only on the first page
        addHeader();
    
        // Add watermark on every page
        addWatermark();
    
        // First pass to calculate total number of pages
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: startY,
            theme: 'striped',
            columnStyles: {
                0: { halign: 'right' ,cellWidth: 20 },   // Align "Payment No" to the right
                1: { halign: 'right' },  // Align "Payment Date" to the right
                2: { halign: 'right' },  // Align "Interest Rate" to the right
                3: { halign: 'right' },  // Align "Interest Due" to the right
                4: { halign: 'right' },  // Align "Payment Due" to the right
                5: { halign: 'right' },  // Align "Principal Paid" to the right
                6: { halign: 'right' },  // Align "Balance" to the right
            },
            didDrawPage: function (data) {
                const pageNumber = doc.internal.getNumberOfPages();
                
                // Add header only on the first page, skip for others
                if (data.pageNumber === 1) {
                    addHeader();
                }
    
                // Add watermark on each page
                addWatermark();
    
                // Add page number to the bottom right side of each page
                doc.setFontSize(10);
                doc.setFont("helvetica", "normal");
                doc.setTextColor(0, 0, 0); // Black color for the page number
                const pageNumberText = `Page ${data.pageNumber}`;
                doc.text(pageNumberText, pageWidth - doc.getTextWidth(pageNumberText) - 10, pageHeight - 10);
            }
        });
    
        // Save the PDF
        doc.save('EMI_Statement.pdf');
    };
                    
    // const exportToExcel = () => {
    //     const worksheet = XLSX.utils.json_to_sheet(schedule);
    
    //     const range = XLSX.utils.decode_range(worksheet['!ref']);
    //     for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    //         for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
    //             const cellAddress = XLSX.utils.encode_cell({ r: rowNum, c: colNum });
    //             if (!worksheet[cellAddress]) continue;
    
    //             worksheet[cellAddress].s = { protection: { locked: true } }; 
    //         }
    //     }
    
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule');
    
    //     worksheet['!protect'] = {
    //         password: 'finwise',
    //         editObjects: false,
    //         selectLockedCells: true
    //     };
    
    //     XLSX.writeFile(workbook, 'EMI_Schedule - Finwise School.xlsx');
    // };
    const exportToExcel = async () => {
        // Create a new workbook and add a worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Schedule');
    
        // Fetch the image as a buffer
        const imageBuffer = await fetch(logo).then(res => res.arrayBuffer());
    
        // Add the image to the workbook
        const imageId = workbook.addImage({
            buffer: imageBuffer,
            extension: 'png',
        });
    
        worksheet.addImage(imageId, {
            tl: { col: 0, row: 0 }, 
            ext: { width: 100, height: 100 }, 
        });
    
        const headers = ["Payment No", "Payment Date", "Interest Rate", "Interest Due", "Payment Due", "Principal Paid", "Balance"];
        worksheet.addRow(headers).font = { bold: true };
    
        schedule.forEach(row => {
            const rowData = [
                row.paymentNo,
                row.paymentDate,
                row.interestRate,
                row.interestDue,
                row.paymentDue,
                row.principalPaid,
                row.balance
            ];
            worksheet.addRow(rowData);
        });
    
        worksheet.columns.forEach(column => {
            column.width = 20; 
        });
    
        worksheet.protect('finwise', {
            selectLockedCells: true
        });
    
        workbook.xlsx.writeBuffer().then(buffer => {
            const url = URL.createObjectURL(new Blob([buffer]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'EMI_Schedule - Finwise School.xlsx';
            a.click();
            URL.revokeObjectURL(url);
        }).catch(err => console.error(err));
    };
    return (
        <div className="bg-[#070707] p-2">
            <div className="max-w-6xl mx-auto bg-[#070707] shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-[#9B4DCA]">EMI Calculator</h1>
                    <p className="text-gray-300">Calculate your dynamic EMI based on frequency</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-300 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Loan Amount */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="loanAmount" className="text-gray-300">Loan Amount</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-300">&#163;</span>
                                    <input
                                        type="number"
                                        id="loanAmount"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        className="bg-purple-300 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                              {errors.loanAmount && <p className="text-gray-900 text-sm mt-1">{errors.loanAmount}</p>}

                            {/* Annual Interest Rate */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="interestRate" className="text-gray-300">Annual Interest Rate (%)</label>
                                <input
                                    type="number"
                                    id="interestRate"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="bg-purple-300 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.interestRate && <p className="text-gray-900 text-sm mt-1">{errors.interestRate}</p>}

                            {/* Term Length */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="termLength" className="text-gray-300">Term Length (in Years)</label>
                                <input
                                    type="number"
                                    id="termLength"
                                    value={termLength}
                                    onChange={(e) => setTermLength(e.target.value)}
                                    className="bg-purple-300 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.termLength && <p className="text-gray-900 text-sm mt-1">{errors.termLength}</p>}

                            {/* First Payment Date */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="firstPaymentDate" className="text-gray-300">First Payment Date</label>
                                <input
                                    type="date"
                                    id="firstPaymentDate"
                                    value={firstPaymentDate}
                                    onChange={(e) => setFirstPaymentDate(e.target.value)}
                                    className="bg-purple-300 text-gray-800 font-semibold text-right p-2 rounded-lg w-40"
                                />
                            </div>
                            {/* Compound Period */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="compoundPeriod" className="text-gray-300">Compound Period</label>
                                <select
                                    id="compoundPeriod"
                                    value={compoundPeriod}
                                    onChange={(e) => setCompoundPeriod(e.target.value)}
                                    className="bg-purple-300 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Annually">Semi-Annually</option>
                                </select>
                            </div>
                            {/* Payment Frequency Dropdown */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="paymentFrequency" className="text-gray-300">Payment Frequency</label>
                                <select
                                    id="paymentFrequency"
                                    value={paymentFrequency}
                                    onChange={(e) => setPaymentFrequency(e.target.value)}
                                    className="bg-purple-300 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Monthly">Semi-Monthly</option>
                                    <option value="Bi-Weekly">Bi-Weekly</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    {/* Results Display */}

                    <div className="output-fields mt-0 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-300 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="text-gray-300">{paymentFrequency} Payment</p>
                                <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.payment}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Display */}
                <div style={{ marginTop: "-105px" }}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-300 mb-4 md:mb-0">EMI Payment Schedule</h2>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button
                                onClick={exportToPDF}
                                className="bg-red-500 text-white mb-2 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-200 flex items-center space-x-2"
                            >
                                <i className="fas fa-file-pdf"></i>
                                <span>PDF</span>
                            </button>
                            <button
                                onClick={exportToExcel}
                                className="bg-purple-600 text-white mb-2 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 flex items-center space-x-2"
                            >
                                <i className="fas fa-file-excel"></i>
                                <span>Excel</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto max-h-[500px] border border-gray-300 rounded-lg shadow-lg">
                        <table className="min-w-full bg-[#070707]">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left text-gray-900">Payment No</th>
                                    <th className="border p-2 text-left text-gray-900">Payment Date</th>
                                    <th className="border p-2 text-left text-gray-900">Interest Rate</th>
                                    <th className="border p-2 text-left text-gray-900">Interest Due</th>
                                    <th className="border p-2 text-left text-gray-900">Payment Due</th>
                                    {/* <th className="border p-2 text-left">Extra Payments</th>
                                    <th className="border p-2 text-left">Additional Payments</th> */}
                                    <th className="border p-2 text-left text-gray-900">Principal Paid</th>
                                    <th className="border p-2 text-left text-gray-900">Balance</th>
                                    {/* <th className="border p-2 text-left">Tax Returned</th>
                                    <th className="border p-2 text-left">Cumulative Tax Returned</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.slice(0, showMore ? schedule.length : 10).map((row, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">{row.paymentNo}</td>
                                        <td className="border p-2">{row.paymentDate}</td>
                                        <td className="border p-2">{row.interestRate}</td>
                                        <td className="border p-2">{row.interestDue}</td>
                                        <td className="border p-2">{row.paymentDue}</td>
                                        {/* <td className="border p-2">{row.extraPayments}</td>
                                        <td className="border p-2">{row.additionalPayment}</td> */}
                                        <td className="border p-2">{row.principalPaid}</td>
                                        <td className="border p-2">{row.balance}</td>
                                        {/* <td className="border p-2">{row.taxReturned}</td>
                                        <td className="border p-2">{row.cumulativeTaxReturned}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-4 text-blue-500"
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
                
            
                <Tool_Footer message="Get a clear view of your monthly EMI payments. Start managing your finances with ease!"/>
                <Info/>

                <CalculatorList activeCalculator="EMI Calculator" />


            </div>
        </div>
    );
};
export default EMICalculator;
