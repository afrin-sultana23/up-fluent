import React, { useState } from 'react';
import useCourse from "../../Hooks/useCourse.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import CategoryTab from "./CategoryTab.jsx";

const Categories = () => {
    const categories = ["English", "Spanish", "Japanese", "German", "Korean", "Arabic", "Others"];
    const { category } = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const [data] = useCourse();

    const english = data.filter(item => item.category === 'English');
    const spanish = data.filter(item => item.category === 'Spanish');
    const japanese = data.filter(item => item.category === 'Japanese');
    const german = data.filter(item => item.category === 'German');
    const korean = data.filter(item => item.category === 'Korean');
    const arabic = data.filter(item => item.category === 'Arabic');
    const others = data.filter(item => item.category === 'Others');

    return (
        <div>
            <div className="mx-auto max-w-5xl my-16">
                <h1 className="heading">Find the right courses for you</h1>
                <p className="subHeading">With over 30,000 tutors and 1M+ learners, we know language learning</p>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>English</Tab>
                        <Tab>Spanish</Tab>
                        <Tab>Japanese</Tab>
                        <Tab>German</Tab>
                        <Tab>Korean</Tab>
                        <Tab>Arabic</Tab>
                        <Tab>Others</Tab>
                    </TabList>
                    <TabPanel>
                        <CategoryTab items={english}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={spanish}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={japanese}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={german}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={korean}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={arabic}></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={others}></CategoryTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;