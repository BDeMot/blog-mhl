export default defineAppConfig({
  url: "https://moneyhackslab.com",
  theme: 'mistral',
  name: 'MoneyHacksLab',
  description: 'MoneyHacksLab is a blog that helps you make money.',
  table_of_contents: true,
  // toc: {
  //   showChildren: true,
  // },
  menu: [
      { name: "Home", path: "/" },
      { name: "Archives", path: "/archives" },
  ],
  authors: [
      {
          default: true,
          username: "Bdm",
          name: "Benjamin D.",
          description:
              "Benjamin is a frontend developper and entrepreneur. He loves to write about software engineering, entrepreneurship, and personal development.",
          avatar: "/images/avatar.jpg",
          socials: {
              linkedin: "https://www.linkedin.com/in/benjamin-de-mot/",
              github: "https://github.com/BDeMot",
          },
      },
  ],
  pagination: {
    per_page: 5,
  },
  socials: {
    sharing_networks: [
        'facebook', 
        'twitter', 
        'linkedin', 
        'email', 
        'pinterest', 
        'reddit', 
        'whatsapp', 
        'telegram', 
        'skype'
    ]
  },
  newsletter: {
    enabled: true,
    provider: "demo",  // possible values: "blogtally", "mailerlite", "demo"
    form_action: "YOUR_FORM_ACTION_URL",
  }
})