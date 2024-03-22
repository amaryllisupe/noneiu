if (!data || !data.origin) {
  console.log('Data or data.origin is undefined.');
} else {
  console.log('Could not resolve unknown localhost', data.origin);
}
