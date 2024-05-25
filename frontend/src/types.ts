export type CoachCard = {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  portfolio: string[]
  specialties: string[]
  certifications: string[]
  experienceYears: number
  contactInfo: {
    email: string
    phone: string
    location: string
  }
  availableHours: string[]
  comments: string[]
  rating: number
}
