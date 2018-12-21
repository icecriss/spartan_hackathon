import allChallenges from '../../components/allChallenges.json'

const initialState = {
  allChallenges,
  startedChallenges: [],
  terminatedChallenges: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "ADD_TO_STARTED":
      let currentChallenge = state.startedChallenges;
      currentChallenge.push(payload)
      return { ...state, startedChallenges: currentChallenge }

    case "ADD_TO_TERMINATED":
      let currentChallenges = state.terminatedChallenges;
      currentChallenges.push(payload)
      return { ...state, terminatedChallenges: currentChallenges }

    case "INCREMENT_SCORE":
      // get all started challenges
      let currentChallengess = state.startedChallenges;
      // get all terminated challenges
      let currentTerminated = state.terminatedChallenges;
      // find the right challenge in th list

      // * * * * * * * * //
      // A T T E N T I O N : la ligne du dessous sera à décommenter et celle d'après à supprimer //
      // let challenge = currentChallengess.find((chal) => chal.id == payload.challenge.id)
      let challenge = currentChallengess.find((chal) => chal.id ? chal.id : 1 == payload.challenge.id)

      // find the index of current challenge in challenges list
      let index = currentChallengess.indexOf(challenge)
      // remove current challenge from list
      currentChallengess.splice(index, 1)
      // update score value
      payload.operator == '+' ? challenge.score += payload.scoreValue : challenge.score -= payload.scoreValue
      // re set challenge into challenges list 
      if (challenge.score >= challenge.objectif) {
        currentTerminated.push(challenge)
      } else {
        currentChallengess.push(challenge)
      }
      return { ...state, startedChallenges: currentChallengess, terminatedChallenges: currentTerminated }

    default:
      return state
  }
}

