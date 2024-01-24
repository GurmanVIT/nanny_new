import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import OngoingNanny from './OngoingNanny';
import UpcomingNanny from './UpcomingNanny';
import PastNanny from './PastNanny';


const Nannybooking = () => {
  return (
    <>
        <div className="container">
                <div className="row order_card mb-5">
                    <Tabs>
                        <TabList>
                            <Tab>Ongoing</Tab>
                            <Tab>Upcoming</Tab>
                            <Tab>Past</Tab>
                        </TabList>
                        <TabPanel>
                          <OngoingNanny/>
                        </TabPanel>
                        <TabPanel>
                           <UpcomingNanny/>
                        </TabPanel>
                        <TabPanel>
                           <PastNanny/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
    </>
  )
}

export default Nannybooking
