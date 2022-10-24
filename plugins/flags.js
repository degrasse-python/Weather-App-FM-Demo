import { Flag, RoxString, RoxNumber, Rox } from 'rox-ssr'

export const Flags = {
  airQuality: new Flag(false),
  goldenHour: new Flag(false),
  searchBar: new Flag(false),
}


async function initRollout() {
  const configurationFetchedHandler = fetcherResults => {
    if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') 
    {
      window.location.reload(false) // don't reload the window
    }
  }


  // EXPERIMENTS ARE DEPRECATED THIS IS USING SDK <5.0
  const impressionHandler = (reporting, experiment) => {
    if (experiment) 
    {
      console.log('flag ' + reporting.name + ' value is ' + reporting.value + ', it is part of ' + experiment.name + ' experiment')

    } else 
      {
      console.log('No experiment configured for flag ' + reporting.name + '. default value ' + reporting.value + ' was used')
    }
  }


  const options = {
    configurationFetchedHandler: configurationFetchedHandler,
    impressionHandler: impressionHandler
  }

// Defined Properties

  Rox.register('default', Flags)
  // test env key
  await Rox.setup("6355774f90ae400245103cee", options)
}


