import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-10 space-y-8 leading-relaxed">
      <h1 className="text-3xl font-bold text-yellow-400">📜 Terms & Conditions</h1>
      <p><strong>Finwise School – Beta App</strong><br />
        <strong>Effective Date:</strong> 01/07/2025<br />
        <strong>Version:</strong> Beta 1.0</p>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Finwise School, a mobile application operated by Finwise School Ltd, a company registered in Scotland. These Terms and Conditions (“Terms”) govern your access to and use of our mobile application (the “App”).
        </p>
        <p>
          By using or accessing the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Company Information</h2>
        <ul className="list-disc ml-6">
          <li>Company Name: Finwise School Ltd</li>
          <li>Registered in: Scotland, United Kingdom</li>
          <li>Company Number: SC819264</li>
          <li>Registered Office: Inspire Hub, Level 6, 50 Richmond St, Glasgow G1 1XU</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Educational Purpose – No Financial Advice</h2>
        <p>Finwise School provides educational content only. We do not offer financial advice, investment recommendations, or regulated financial services.</p>
        <ul className="list-disc ml-6">
          <li>We are not authorized or regulated by the UK’s Financial Conduct Authority (FCA).</li>
          <li>All in-app content, including games like Budget Boss, simulations, and admin messages, are for informational and educational purposes only.</li>
        </ul>
        <p>You must not rely on any content within the App to make personal, financial, investment, or professional decisions.</p>
      </section>

      {/* Repeat the same structure for the following sections */}
      {[
        {
          title: "4. Who Can Use the App",
          content: [
            "This App is designed for individuals aged 15 to 22 residing in the United Kingdom. By registering, you confirm that:",
            <ul className="list-disc ml-6" key="4-list">
              <li>You meet the minimum age requirement.</li>
              <li>If you are under 18, you have obtained permission from a parent or legal guardian.</li>
              <li>You are accessing the App for personal, non-commercial use.</li>
            </ul>,
            "We may suspend or delete accounts that do not meet these criteria."
          ]
        },
        {
          title: "5. Beta Release Notice",
          content: [
            "This is a Beta version of the App and may:",
            <ul className="list-disc ml-6" key="5-list">
              <li>Contain bugs, incomplete features, or inaccuracies</li>
              <li>Experience occasional downtime or loss of data</li>
              <li>Change significantly between updates</li>
            </ul>,
            "You understand and accept that features may be added, modified, or removed at any time without prior notice."
          ]
        },
        {
          title: "6. Features Available in This Beta",
          content: [
            <ul className="list-disc ml-6" key="6-list">
              <li>Budget Boss Game: A simulation-based budgeting game for learning basic money management.</li>
              <li>Streaks: Users earn streaks by playing the game or reading messages in the community section.</li>
              <li>Community Section: Read-only message board where Finwise School may post updates or announcements.</li>
              <li>Ad-Supported: The app is free to use and monetised through third-party advertisements.</li>
            </ul>
          ]
        },
        {
          title: "7. Account Creation",
          content: [
            "You will need to register an account to access the App. You agree to:",
            <ul className="list-disc ml-6" key="7-list">
              <li>Provide accurate and up-to-date personal information (name, email, mobile number, and age)</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Not share your account with others</li>
            </ul>,
            "We reserve the right to suspend or terminate accounts that breach these Terms."
          ]
        },
        {
          title: "8. Advertising and Revenue Model",
          content: [
            "The App is supported by third-party advertisements, including through services such as Google AdMob.",
            <ul className="list-disc ml-6" key="8-list">
              <li>Ads may be personalised based on app usage, subject to your device and privacy settings.</li>
              <li>We do not control or endorse the content of third-party ads.</li>
              <li>Clicking on an ad may redirect you to external websites or applications.</li>
            </ul>,
            "By using the App, you agree to see occasional ads as part of your experience."
          ]
        },
        {
          title: "9. User Conduct",
          content: [
            "You agree not to:",
            <ul className="list-disc ml-6" key="9-list">
              <li>Upload, post, or transmit any offensive, misleading, or illegal content</li>
              <li>Attempt to hack, reverse-engineer, or interfere with the App’s functionality</li>
              <li>Impersonate any person or entity</li>
              <li>Use automation tools (bots/scripts) to access or manipulate the App</li>
              <li>Exploit bugs or glitches to gain unfair advantages in features like streaks or games</li>
            </ul>,
            "Violations may result in account suspension or removal."
          ]
        },
        {
          title: "10. Ownership & Intellectual Property",
          content: [
            "All content in the App — including designs, logos, text, illustrations, games, streak logic, and other elements — is owned by or licensed to Finwise School Ltd.",
            "You may not:",
            <ul className="list-disc ml-6" key="10-list">
              <li>Copy, reproduce, or republish content</li>
              <li>Use any part of the App for commercial purposes</li>
              <li>Create derivative works based on our intellectual property</li>
            </ul>
          ]
        },
        {
          title: "11. Data Collection and Usage",
          content: [
            "We use Firebase, Google Analytics, and other tools to track user engagement and improve app performance.",
            "We collect:",
            <ul className="list-disc ml-6" key="11-list">
              <li>Name, email, mobile number, age</li>
              <li>In-app activity (streaks, clicks, game progress)</li>
              <li>Device & technical data (anonymised)</li>
              <li>Ad interactions (e.g. impressions, clicks)</li>
            </ul>,
            "For full details, please read our Privacy Policy."
          ]
        },
        {
          title: "12. Updates and Modifications",
          content: [
            "We may modify the App or these Terms at any time. Material changes will be communicated via:",
            <ul className="list-disc ml-6" key="12-list">
              <li>In-app notifications</li>
              <li>Email (if applicable)</li>
            </ul>,
            "Continued use after updates constitutes your acceptance of the revised Terms."
          ]
        },
        {
          title: "13. Account Suspension or Termination",
          content: [
            "We may suspend or terminate your access if:",
            <ul className="list-disc ml-6" key="13-list">
              <li>You breach these Terms</li>
              <li>You attempt to misuse or damage the platform</li>
              <li>We discontinue the App or Beta testing period</li>
            </ul>,
            "You may request account deletion at any time by contacting us."
          ]
        },
        {
          title: "14. Limitation of Liability",
          content: [
            "To the fullest extent permitted by law:",
            <ul className="list-disc ml-6" key="14-list">
              <li>The App is provided “as is” and without warranties of any kind.</li>
              <li>We are not liable for any direct or indirect losses arising from your use of the App.</li>
              <li>Finwise School Ltd is not responsible for third-party content (e.g. ads).</li>
            </ul>,
            "Your use of the App is at your own risk."
          ]
        },
        {
          title: "15. Governing Law and Jurisdiction",
          content: [
            "These Terms shall be governed by and interpreted in accordance with the laws of Scotland. Any disputes shall be subject to the exclusive jurisdiction of the Scottish courts."
          ]
        },
        {
          title: "16. Contact Information",
          content: [
            <ul className="list-none ml-0" key="16-list">
              <li>📧 Email: contact@finwiseschool.com</li>
              <li>🏢 Address: Finwise School Ltd, Inspire Hub, Level 6, 50 Richmond St, Glasgow G1 1XU Scotland, United Kingdom</li>
              <li>📄 Company Number: SC819264</li>
            </ul>
          ]
        }
      ].map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          {section.content.map((line, i) => (
            <p className="mb-2" key={i}>{line}</p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default TermsAndConditions;
