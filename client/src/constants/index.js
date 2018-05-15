export const dashboardRoutes =[
  {
    route: 'account', 
    img: '',
  },
  {
    route: 'profile', 
    img: '',
  },
  {
    route: 'jobs', 
    img: '',
  },
  {
    route: 'blog', 
    img: '',
  }
]

export const jobFormFields =[
  {hint: "Ea. Full stack developer for x company", label: "Enter a Job Title", name: "title"},
  {hint: "Ea. Full stack developer opportunity", label: "Enter a Subject line for your job email", name: "subject"},
  {hint: "Ea. The job requires 3+ years of experience in...", label: "Enter the job description", name: "body"},
  {hint: "Ea. The job requires 3+ years of experience in...", label: "Enter your recipients", name: "recipients"},
]

// more on email regex here: emailregex.com
export const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/