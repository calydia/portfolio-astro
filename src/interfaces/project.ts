export default interface ProjectHighlight {
  title: string,
  contentSummary: string,
  decorativeImage: string,
  repoLinks: [{
    uri: string,
    title: string,
  }],
  projectLink: [{
    uri: string,
    title: string,
  }],
  technologies: [{
    id: string,
    url: string,
    name: string,
  }],
  id: string,
  imageCredits: string,
  slug: string,
}