import React from 'react'
import './Articles.css'

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


        <div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Amalgam</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
     
      <p class="text-gray-500 dark:text-gray-400">Dental amalgam is a silver-coloured filling material. It is made of mercury, silver, copper, zinc and tin. Dentists have used it to fix teeth for over 150 years. Dentists and scientists have done a lot of research on dental amalgam.
      <br/><br/>
      Amalgam was commonly used by dentists in the 1990s. These days it is not commonly used. Some dentists do not use it at all.
      <br/><br/>
      Amalgam is strong and can last for a long time. But dentists need to cut away more tooth structure to fix your tooth using an amalgam filling . This is because the amalgam is held in place by the shape of the cavity that is cut into the tooth. Amalgam does not stick to the tooth surface like white filling materials do.
      <br/><br/>
      This filling material is silver in colour and can turn darker over time.
      <br/><br/>People often ask
      <a href="https://www.teeth.org.au/should-i-remove-my-amalgam-fillings" class="text-blue-600 dark:text-blue-500 hover:underline"> if they should have their amalgam fillings removed.</a></p>
    </div>
    <div>
      <img src="https://www.teeth.org.au/media/f4hju5kl/amalgam-circle.jpg?rmode=max&width=500&height=333" alt="Amalgam Filling"></img>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Composite resin</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Composite resin is a tooth-coloured or white filling material. Dentists can use it for fillings in both the front and back teeth. Dentists often use it:</p>

      <ul>
        <li>to fix broken teeth and teeth damaged by tooth decay</li>
        <li>for fissure sealants</li>
        <li> for cosmetic dental treatments, such as veneers.</li>
      </ul>
      <br/><br/>

      <p class="text-gray-500 dark:text-gray-400" class="text-blue-600 dark:text-blue-500 hover:underline">Dentists glue composite fillings to the surface of the tooth. This is called bonding. Because composite resin is glued to the tooth’s surface, dentists don’t need to cut away as much tooth structure to fix teeth with composite fillings.  
      <br/><br/>
      The colour of the material can be matched to the colour of the tooth being fixed. People may not be able to see the filling if the colour is matched to your tooth well. </p>
    </div>

    <div>
      <img src="https://t3.ftcdn.net/jpg/00/52/84/36/240_F_52843641_64QE2MA1jqWCQoUxOsUjoQ5BelXbM6oI.jpg" alt="Composite Filling"/>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Glass-ionomer cement</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Glass-ionomer cement (GIC) is also a white or tooth-coloured filling material. It is not as strong as composite resin. Fluoride is an ingredient in this dental filling material. It has many uses, but common uses include fissure sealants and temporary fillings.</p>

    </div>
  </div>
</div>


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
