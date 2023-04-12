import { useState, useRef, useEffect } from 'react'

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

export function useOutsideClick() {
  const [isShown, setIsShown] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (!componentRef.current.contains(e.target)) setIsShown(false)
    }

    if (isShown) {
      setTimeout(() => window.addEventListener('click', handleClick), 0)
    }
    return () => window.removeEventListener('click', handleClick)
  }, [isShown])

  return {isShown, setIsShown, componentRef}
}

export function getCookie(name) {
  function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
  const match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
  return match ? match[1] : null;
}

export function isPasswordStrong(password) {
  const regexp = /^(?=.*\d)(?=.*[+!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return regexp.test(password)
}