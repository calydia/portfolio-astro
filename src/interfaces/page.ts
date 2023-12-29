export default interface Page {
  title: string,
  decorativeImageCredits: string,
  decorativeImage: string,
  repoLinks: [{
    uri: string,
    title: string,
  }],
  projectLink: [{
    uri: string,
    title: string,
  }],
  content: string,
  technologies: [{
    id: string,
    url: string,
    name: string,
  }],
  id: string,
  imageCredits: string,
  slug: string,
  metaDescription: string,
  roles: [{
    id: string,
    name: string,
  }],
}