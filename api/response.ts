export const ResponseDto = (data: any) => {
  if (!data) return null;
  const response = [];
  const results = data as any[];

  for (let i = 0; i < results.length; i += 1) {
    const current = results[i];

    response.push({
      name: current.slug,
      description: current.description,
      width: current.width,
      height: current.height,
      updatedAt: current.updated_at,
      url: current.urls.full,
    });
  }
  return response;
};
