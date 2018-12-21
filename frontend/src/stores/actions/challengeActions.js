export const addToStartedChallenge = (challenge) => ({
  type: 'ADD_TO_STARTED',
  payload: challenge
})

export const addToTerminatedChallenge = (challenge) => ({
  type: 'ADD_TO_TERMINATED',
  payload: challenge
})

export const incrementScore = (challenge, scoreValue, operator) => ({
  type: 'INCREMENT_SCORE',
  payload: { scoreValue, challenge, operator }
})

