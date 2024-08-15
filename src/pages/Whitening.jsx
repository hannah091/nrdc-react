import React from 'react'
import './Articles.css'

const Whitening = () => {
  return (

<div className='wrapper'>

<div className='header-image-container'
 style={{
  backgroundImage: "url('https://www.deekaydental.com/wp-content/uploads/2018/05/teeth-whitening.jpeg')"
}}
>

  <div className="header-textbox">
    <h2 className="title">Teeth Whitening</h2>
    <p>Teeth whitening is the process of lightening the colour of the teeth</p>
  </div>
</div>

<section className="article-section">
  <h3 className="article-heading">Treatment Options</h3>
  <p>There are two main ways a dentist can whiten teeth. They can do 'in-chair' or 'take-home' whitening. </p>
</section>

<section className="article-section">
  <h3 className="article-heading">In-chair teeth whitening</h3>
  <p>In-chair or in-office teeth whitening means the treatment is done for you in the dental clinic.  This treatment uses strong hydrogen peroxide gel and often a light is placed over the teeth. You should leave your dental appointment with whiter teeth. You may be recommended to use take-home whitening treatment to keep your teeth white. </p>
  <br></br>
  <img src="https://www.teeth.org.au/media/ia2joatb/in-chair-whitening.jpg?rmode=max&width=500&height=333"></img>
</section>

<section className="article-section">
  <h3 className="article-heading">Take-home teeth whitening</h3>
  <p>In-chair or in-office teeth whitening means the treatment is done for you in the dental clinic.  This treatment uses strong hydrogen peroxide gel and often a light is placed over the teeth. You should leave your dental appointment with whiter teeth. You may be recommended to use take-home whitening treatment to keep your teeth white. </p>
  <br></br>
  <img src="https://www.teeth.org.au/media/kmefziww/take-home-whitening.jpg?rmode=max&width=500&height=333"></img>
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

export default Whitening
