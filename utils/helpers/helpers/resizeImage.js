function ResizeImage({ yourImage, width, height }) {
  const resizedImage = image(yourImage).resize(width, height).toBuffer();
  return resizedImage;
}

export default ResizeImage;
