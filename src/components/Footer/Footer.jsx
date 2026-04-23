import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import { toast } from 'react-toastify'

const Footer = () => {
 const handleClick = () => {
    toast.error('Not a Working Link');
  };

  // Array of social media icons
  const socialIcons = [
    { src: youtube_icon, alt: 'YouTube' },
    { src: twitter_icon, alt: 'Twitter' },
    { src: facebook_icon, alt: 'Facebook' },
    { src: instagram_icon, alt: 'Instagram' },
  ];

  // Array of footer links
  const footerLinks = [
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Investor Relations',
    'Content Creators',
    'Privacy',
    'Terms of Use',
    'Cookie Preferences',
    'Corporate Information',
    'Legal Notices',
    'Careers',
    'Contact Us'
  ];

  return (
    <div className='footer'>
      <div className="footer-icons">
        {socialIcons.map((icon, index) => (
          <img 
            key={index} 
            src={icon.src} 
            alt={icon.alt} 
            onClick={handleClick} 
          />
        ))}
      </div>
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index} onClick={handleClick}>{link}</li>
        ))}
      </ul>
      <p className="copyright-text">© 2026 Netflix Clone. All rights reserved.</p>
    </div>
  )
}

export default Footer
