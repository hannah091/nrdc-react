import React from 'react'
import './Articles.css'
import { Accordion } from "flowbite-react";

const Filling = () => {
  return (
    <div className='wrapper'>

      <div className='header-image-container' id="cdbs-page-header" 
       style={{
        backgroundImage: "url('https://t3.ftcdn.net/jpg/04/73/72/26/240_F_473722672_56nZOZJfXiGGDqLxKWrjMGfnMnlyxkJt.jpg')"
      }}
      >

        <div className="header-textbox">
          <h2 className="title">Fillings</h2>
          <p>Dental fillings are used to replace natural tooth that is fractured, broken or damaged by tooth decay. If you need a filling, your dentist can choose between different filling materials that works best for you.</p>
        </div>
      </div>

      <section className="article-section">
        <h3 className="article-heading">Types of dental filling materials</h3>
        <p>There are different materials that our dentist can use to fix your tooth if you need a filling. Each material has advantages and disadvantages. There are different factors that can influence which material your dentist decides to use. This includes: </p>

        <ul>
          <li>where the tooth is located in the mouth</li>
          <li>how the teeth bite together</li>
          <li>the size of the filling</li>
        </ul>
        <br></br>
        <p>Our dentist will give you advice on what kind of dental filling material is best for you. This could be different for each tooth.</p>
        <br/>


        <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

      </section>

  
      <section className="article-section">
        <h3 className="article-heading">What is a temporary filling?</h3>
        <p>Dentists might use a temporary filling if they will need to remove the filling material soon after it was placed. They might do this: </p>

        <ul>
          <li>when the same tooth needs to be treated a few times over multiple appointments</li>
          <li>when there is not enough time to finish treatment in one dental visit</li>
          <li>during emergency dental treatment</li>
          <li>when covering up a tooth cavity between root canal treatment appointments.</li>
        </ul>
      </section>
      

      <section className="article-section">
        <h3 className="article-heading">What happens after my filling?</h3>
        <p>After a tooth has a filling, it can be sensitive to hot and or cold temperatures or when biting down. We call this post-operative sensitivity.
        <br/><br/>
        The sensitivity usually goes away after a few days. Sometimes, it can last 1 or 2 weeks. Return to your dentist if the sensitivity does not go away or gets worse. </p>
      </section>

      <section className="article-section">
        <h3 className="article-heading">How long will my filling last?</h3>
        <p>Fillings do not last forever. 
        <br/><br/>
        Using your teeth over time can cause the join between the tooth and the filling to open. This can let food and bacteria collect in this space. This may cause tooth decay. The amount of time a filling lasts also depends on how well you look after it. 
        <br/><br/>
        Fillings can change colour. This means that as a white dental filling gets older, it may no longer match the colour of your tooth. This does not mean the filling needs to be replaced with a new one. The colour may be a concern for some people when it affects their front teeth. A dentist can replace the filling so it matches the colour of your natural tooth again. 
        </p>
      </section>

      <section>
        <div className='ada-container'>
        <img className='ada-logo' src='https://img.imageboss.me/ada-live/width/98/getmedia/e2370f06-cfbf-4020-aa2e-a5557b77277d/ADA_Image_logo_blue_symbol.png'></img>
        <a href='https://www.teeth.org.au/fillings' target="_blank"><i>Written by the Australian Dental Association</i></a>
        </div>
      </section>

    </div>
  )
}

export default Filling
