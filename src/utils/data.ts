
type searchParams = {
  page: number,
  pageSize: number,
  searchTerm?: string,
}

export const faqsQuery = () => {
  const query = `*[_type == "faq"] | order(_createdAt desc){
    _id,
    title,
    body,
    _createdAt
  }`;
  return query;
};

export const testimonalsQuery = () => {
  const query = `*[_type == "testimonal"] | order(_createdAt desc){
    _id,
    author,
    quote,
    "logo": logo.asset->url,
    _createdAt
  }`;
  return query;
};

export const professionalListQuery = () => {  
  const query = `*[_type == "professional"]{
    _id,
    name,
    title,
    "imageUrl": image.asset->url,
    specialties,
    _createdAt
  }`;
  return query;
};

export const postDetailQuery = (postId: string) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    _id,
    title,
    body,
    mainImageUrl,
    duration,
    _createdAt
  }`;
  return query;
};

export const newsDetailMoreQuery = (id: string) => {
  if (id) {
    const query = `*[_type == "post" && _id != '${id}' && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      subtitle,
      duration,
      mainImageUrl,
      _createdAt,
      body
    }`;
    return query;
  } else {
    const query = `*[_type == "post" && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      subtitle,
      duration,
      mainImageUrl,
      _createdAt,
      body
    }`;
    return query;
  }
};


export const newsQuery = ({page, pageSize}: searchParams) => {  
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  
  const query = `*[_type == "post" && status == 'active'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    subtitle,
    duration,
    mainImageUrl,
      _createdAt,
    body
  }`;
  
  return query;
};

export const newSearchQuery = ({page, pageSize, searchTerm}: searchParams) => {
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  const query = `*[_type == "post" && status == 'active' && title match '${searchTerm}*'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    subtitle,
    duration,
    mainImageUrl,
      _createdAt,
    body
  }`;

  return query;
};