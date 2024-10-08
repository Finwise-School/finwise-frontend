import React, { useState } from 'react';
import { Card, Button, Modal, Badge, Accordion } from 'flowbite-react'; // Assuming you're using flowbite for the Card component

const YourBlogs = ({ dataYourBlogs, baseURL }) => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);


  const handleOpenModal = (blog) => {
    setOpenModal(true);
    setSelectedBlog(blog);
  };

    return (
      <>
      <div className=' my-10'>
      <h1 className='text-center text-5xl font-bold my-6'>My Blogs</h1>
      { (!dataYourBlogs || dataYourBlogs.length === 0) ? (<p>No blogs available.</p>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataYourBlogs.map(blog => (
        <>
        {selectedBlog && (
                  <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>{selectedBlog.title}</Modal.Header>
                  <Modal.Body>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                  </Modal.Body>
                  <Modal.Footer>
                  <p>{selectedBlog.writeDate}</p>
                  {selectedBlog.isApproved ? (<p className='text-green-700'>APPROVED</p>) : (<p className='text-red-700'>NOT APPROVED</p>)}
                  </Modal.Footer>
                </Modal>
        )}
                <Card key={blog._id} className={`p-2 ${blog.isDeleted && 'border border-red-800'}`}>
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <div className='flex flex-row justify-between'>
                      <p>{blog.writeDate}</p>
                      {blog.isDeleted ? (<Badge color="failure">Deleted</Badge>) : blog.isApproved ? (<p className='text-green-700'>APPROVED</p>) : (<p className='text-red-700'>NOT APPROVED</p>)}
                    </div>
                    <Button onClick={() => handleOpenModal(blog)}>View Full Content</Button>
                    {blog.isDeleted && (
                    <Accordion collapseAll>
                      <Accordion.Panel>
                      <Accordion.Title>Deletion Reason</Accordion.Title>
                      <Accordion.Content>
                      <p>{blog.deletionReason}</p>
                      </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                    )}
                    {blog.revokeReason && (
                                        <Accordion collapseAll>
                                          <Accordion.Panel>
                                          <Accordion.Title>Revoke Reason</Accordion.Title>
                                          <Accordion.Content>
                                          <p>{blog.revokeReason}</p>
                                          </Accordion.Content>
                                          </Accordion.Panel>
                                        </Accordion>
                    )}
                </Card>
                </>
            ))}
        </div>
      )}
      </div>
      </>  
    );
};

export default YourBlogs;
