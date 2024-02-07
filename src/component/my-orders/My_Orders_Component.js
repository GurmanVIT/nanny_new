import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import OngoingUser from './OngoingUser';
import UpcomingUser from './UpcomingUser';
import PastUser from './PastUser';


const My_Orders_Component = () => {
    return (
        <>
            <div>
                <div className="row order_card mb-5">
                    <Tabs>
                        <TabList>
                            <Tab>Ongoing</Tab>
                            <Tab>Upcoming</Tab>
                            <Tab>Past</Tab>
                        </TabList>
                        <TabPanel>
                          <OngoingUser/>
                        </TabPanel>
                        <TabPanel>
                           <UpcomingUser/>
                        </TabPanel>
                        <TabPanel>
                           <PastUser/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default My_Orders_Component;