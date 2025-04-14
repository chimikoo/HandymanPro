import { defineType, defineField } from "sanity"

export const contactType = defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subtext", type: "text", title: "Subtext" }),
    defineField({ name: "phoneLabel", type: "string", title: "Phone Label" }),
    defineField({ name: "phoneNumber", type: "string", title: "Phone Number" }),
    defineField({ name: "emailLabel", type: "string", title: "Email Label" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "addressLabel", type: "string", title: "Address Label" }),
    defineField({ name: "address", type: "string", title: "Address" }),
    defineField({ name: "mapUrl", type: "url", title: "Google Map Embed URL" }),
    defineField({ name: "formLabels", title: "Form Labels", type: "object", fields: [
      defineField({ name: "name", type: "string", title: "Name Label" }),
      defineField({ name: "email", type: "string", title: "Email Label" }),
      defineField({ name: "phone", type: "string", title: "Phone Label" }),
      defineField({ name: "message", type: "string", title: "Message Label" }),
      defineField({ name: "submit", type: "string", title: "Submit Button Text" }),
    ]}),
  ],
})
