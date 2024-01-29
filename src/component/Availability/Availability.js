import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import Calendar from 'react-calendar'
import DatePicker from 'react-date-picker'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import TimeChangeModal from './TimeChangeModal'

const Availability = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleApplyTime = (newTime) => {
    console.log('New time:', newTime);
  };


  return (
    <>
      <div className="order_card mb-5 calender">
        <div>
          <Tabs>
            <TabList>
              <Tab>CALENDER</Tab>
              <Tab>DAYS</Tab>
            </TabList>
            <TabPanel>
              <div className='mt-3'>
                <Calendar />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className='mt-4'>
                  <h6>Select Desired Day</h6>
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th colSpan={2} className='text-center'>Day</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Sunday</td>
                      <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Monday</td>
                      <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Tuesday</td>
                      <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Wednesday</td>
                      <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Thursday</td>
                       <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Friday</td>
                       <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Form>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                          />
                        </Form>
                      </td>
                      <td>Saturday</td>
                      <td>
                        <Button onClick={handleOpenModal}>10:00</Button>
                        <TimeChangeModal isOpen={isModalOpen} onClose={handleCloseModal} onApply={handleApplyTime} />
                      </td>
                      <td>
                        <Button>12:00</Button>
                      </td>
                    </tr>

                  </tbody>
                </Table>


              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Availability
