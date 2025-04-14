export const aboutQuery = `*[_type == "about"]{
    _id,
    heading,
    intro,
    description,
    benefits,
    image
  }`;
  
export const footerQuery = `*[_type == "footer"][0] {
    brandName,
    description,
    servicesTitle,
    companyTitle,
    contactTitle,
    copyrightName,
    services,
    companyLinks,
    contactInfo,
    socialLinks
  }`
  
export const contactQuery = `*[_type == "contact"][0] {
    heading,
    subtext,
    phoneLabel,
    phoneNumber,
    emailLabel,
    email,
    addressLabel,
    address,
    mapUrl,
    formLabels
  }`
  
export const navbarQuery = `*[_type == "navbar"][0]{
    brand,
    quoteButtonText,
    links[]{
      label,
      href
    }
  }`

  export const servicesQuery = `*[_type == "service"]{
    _id,
    title,
    description,
    icon
  }`;
  
  export const servicesSectionQuery = `*[_type == "servicesSection"][0] {
    heading,
    subtext
  }`

  export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    content,
    rating
  }`;

  export const testimonialSectionQuery = `*[_type == "testimonialSection"][0] {
    heading,
    subtext
  }`
  
  export const heroQuery = `*[_type == "hero"][0]{
    heading,
    subtext,
    button {
      text,
      href
    },
    image
  }`
  
  