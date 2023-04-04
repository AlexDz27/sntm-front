export function getEpisodes(seasonNumber) {
  const fileName = `season${seasonNumber}episodes.json`

  try {
    return require(`./jsonStorage/${fileName}`)
  } catch (err) {
    throw new Error('Такого сезона ещё не выпустили либо его пока нет на нашем сайте')
  }
}

export function getEpisode(seasonNumber, episodeNumber) {
  let episodeNumberString
  if (episodeNumber < 10) {
    episodeNumberString = '0' + episodeNumber
  } else {
    episodeNumberString = episodeNumber
  }
  const fileName = `s0${seasonNumber}e${episodeNumberString}.json`

  try {
    return require(`./jsonStorage/episodes/${fileName}`)
  } catch (err) {
    throw new Error('Такого сезона или такой серии ещё не выпустили либо их пока нет на нашем сайте')
  }
}

export function isPasswordStrong(password) {
  const regexp = /^(?=.*\d)(?=.*[+!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return regexp.test(password)
}