module.exports = {
  message(message) {
    const validEmail = typeof message.email == 'string' &&
      message.email.trim() != '';

    return validEmail;
  }
}
