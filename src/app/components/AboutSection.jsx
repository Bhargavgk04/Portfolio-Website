"use client";
import React, {useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA= [
    {
        title:"Skills",
        id:"skills",
        content:
        (
            <ul className="list-disc pl-2">
                <li>JAVA</li>
                <li>Python</li>
                <li>R Language</li>
                <li>C Language</li>
                <li>Leadership</li>
                <li>Team Management</li>
            </ul>
        ),
    },
    {
        title:"Education",
        id:"education",
        content:
        (
            <ul className="list-disc pl-2">
                <li>School: H.C.C.English Medium School,Solapur</li>
                <li>Jr.College: Narayana Jr.College, Uppal,Hyderabad</li>
                <li>College: N.B.Navale Sinhgad College Of Engineering,Solapur</li>
            </ul>
        ),
    },
    {
        title:"Certifications",
        id:"certifications",
        content:
        (
            <ul className="list-disc pl-2">
                <li>Full Stack</li>
                <li>Full Stack</li>
                <li>Full Stack</li>
                <li>Full Stack</li>
                <li>Full Stack</li>
            </ul>
        ),
    },
    ];

const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => 
            {
                setTab(id); 
            });
        };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:hap-16 sm:py-16 xl:px-16">
                <img src="/images/about-image.png" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">
                    About Me
                </h2>
                <p className ="text-base md:text-lg">
                Students will share their inventions with a panel of “sharks.” 
                They will explain why they created the product and how it will help students, the expected profit, how much they are looking for from the sharks, 
                retail price, target audience, marketing plan, and how their prototype works. 
                Design another product for your line.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                        
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                    
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};
export default AboutSection;
