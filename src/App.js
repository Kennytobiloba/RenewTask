import React, { useState } from 'react';
import './App.css';

function App() {
  const categories = [
   
    { 
      id:1,
      title: "UI/UX Design",
      
    link: "UI/UX Design",
    desc: "Unlock a world of knowledge through beautifully curated UI/UX design courses",
    img: "./software.png",
    className: "absolute mt-[-8px] top-[-90%] right-[-19%]",
    header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Frontend development 1",
                description: "anything you want",
                price: 100,
                firstName:"pysavant ",
                lastName:"Codes",
            },
        ],
    },
    {
      id:2,
      title: "Software Development",
      link: "Software Development",
      desc: "Master the art of coding with transformative software development programs",
      img:"./img2.png",
      className: "absolute mt-[-8px] top-[-95%] right-[-15%] max-[1580px]:top-[-55%] max-[1451px]:top-[-95%] max-[1138px]:top-[-55%] max-[971px]:top-[-95%] max-[839px]:top-[-35%]",
       header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "Software Development",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:3,
      title: "DevOps and Cloud Computing",
      link: "DevOps and Cloud Computing",
      desc: "Cultivate digital innovation through seamless DevOps and Cloud Computing integration",
      img:"./img4.png",
      className: "absolute mt-[-8px] top-[-50%]  right-[-18%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Dev and Cloud Computing",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:4,
      title: "Desktop Development",
      link: "Desktop Development",
      desc: "Empower productivity with immersive experiences through desktop development mastery",
      img:"./img5.png",
      className:"absolute mt-[-8px] top-[-90%] right-[-5%] max-[1580px]:top-[-55%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Desktop Development",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:5,
      title: "Project Management",
      link: "Project Management",
      desc: "Drive success through effective planning and execution with expert project management.",
      img:"./img6.png",
      className:"absolute mt-[-8px] top-[-75%] right-[-5%] max-[1451px]:top-[-45%] ",
  header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to  Project Mangement",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:6,
      title: "HR and Talent",
      link: "HR and Talent",
      desc: "Unlock the potential of your workforce with strategic HR and talent management",
      img:"./img7.png",
      className: "absolute mt-[-8px] top-[-75%] right-[-5%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to HR and Talent",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:7,
      title: "Sales and Marketing",
      link: "Sales and Marketing",
      desc: "Maximize reach and drive growth through dynamic sales and marketing strategies.",
      img:"./img8.png",
      className: "absolute mt-[-8px] top-[-75%] right-[-5%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Sales and marketing",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:8,
      title: "Machine Learning",
      link: "Machine Learning",
      desc: "Unleash the power of AI/ML for transformative insights and intelligent solutions",
      img:"./img9.png",
      className: "absolute mt-[-8px] top-[-95%] right-[-5%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Machine Learning",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    {
      id:8,
      title: "Machine Learning",
      link: "Machine Learning",
      desc: "Unleash the power of AI/ML for transformative insights and intelligent solutions",
      img:"./img9.png",
      className: "absolute mt-[-8px] top-[-95%] right-[-5%]",
      header: "font-[600] text-[22px] text-white w-[80%]",
        courses: [
            {
                name: "introduction to Machine Learning",
                description: "anything you want",
                price: 200,
                firstName:"pysavant ",
                lastName:"Codes",
            },
            
        ],
    },
    // Add more categories here
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const resetSelectedCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="App">
      <section className="p-5 px-10 pt-10 max-md:px-5 max-md:pt-5 max-md:h-full overflow-y-visible h-screen flex gap-10">
        <div>
        <div className="flex items-center gap-x-2 max-md:gap-x-5 pb-3">
          {selectedCategory ? (
            <>
              <button onClick={resetSelectedCategory} className="text-[14px] text-white underline cursor-pointer mr-2">
                Back
              </button>
              <p className="font-bold text-[20px] max-md:text-[24px] text-white">
                {selectedCategory.title}
              </p>
            </>
          ) : (
            <p className="font-bold text-[20px] max-md:text-[24px] text-white">
              Select Category
            </p>
          )}
        </div>
        <div className={`grid ${selectedCategory ? 'grid-cols-1' : 'grid-cols-3'} py-5 gap-x-5 gap-y-0 max-[1461px]:grid-cols-2 max-[720px]:grid-cols-1 h-full overflow-visible`}>
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex overflow-visible h-full max-md:h-fit py-5 items-center w-full" onClick={() => handleClick(category)}>
                <div
                  className={`course-card overflow-visible h-full flex flex-col justify-around pt-4 rounded-[20px] max-md:h-fit p-8 bg-gradient-to-br from-[#FF00B8] via-[#585FFF] to-[#920DE3] ${selectedCategory ? 'flex-col max-md:h-full p-4' : ''}`}
                  style={{ width: "500px" }}
                >
                  <div className="flex relative justify-between py-2 overflow-visible w-full">
                    <h3 className={category.header}>{category.title}</h3>
                    <img src={category.img} alt="" className={category.className} />
                  </div>
                  <p className="font-[500] overflow-visible text-[13px] w-[80%] text-white">
                    {category.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        {selectedCategory && (
          <div className="w-[30%] max-md:w-full overflow-visible mt-[90px]">
            {selectedCategory.courses.map((course) => (
              <div key={course.name} className="mb-2">
                <div className="bg-white/10 rounded-[15px] border-[1px] border-[#FC00b5]">
                  <div className="px-5 py-3 overflow-visible flex flex-col">
                    <div className="p-4">
                      <b className="overflow-hidden line-clamp-1 flex items-center mb-4">
                        <p className="text-white text-lg font-bold line-clamp-1">
                          {course.name}
                        </p>
                      </b>
                      <div className="overflow-hidden line-clamp-1">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#FC00B5]">
                          ${course.price}
                        </span>
                        <p className="text-sm font-semibold overflow-visible text-white ml-auto">
                                                    <span className="text-white">
                                                        By
                                                    </span>{" "}
                                                    {course.firstName}{" "}
                                                    {course.lastName}
                                                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
