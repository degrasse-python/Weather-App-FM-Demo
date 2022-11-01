import { Flag, RoxString, RoxNumber, Rox } from 'rox-ssr'

export const Flags = {
  airQuality: new Flag(false),
  goldenHour: new Flag(false),
  searchBar: new Flag(false),
  aside: new Flag(false),
}


async function initRollout() {

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
    impressionHandler: impressionHandler
  }

  // Defined Properties
  Rox.register('ssr', Flags)
  // test env key
  await Rox.setup(process.env.CBFM_KEY, options)
}

initRollout().then(function() {
  console.log('Done loading Rollout');
})

