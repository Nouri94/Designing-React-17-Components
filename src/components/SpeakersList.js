import Speaker from './Speaker'
import useRequestSpeakers from '../hooks/useRequestSpeakers'

function SpeakersList({ showSessions }) {
    const { speakersData, isLoading, hasErrored, error, onFavoriteToggle }
        = useRequestSpeakers(2000)

    if (hasErrored === true) return (
        <div className='text-danger'>
            ERROR: <b>Loading Speaker Data failed {error}</b>
        </div>
    )
    if (isLoading === true) return <div>Loading...</div>
    return (<div className="container speakers-list">
        <div className="row">
            {speakersData.map(function (speaker) {
                return (
                    <Speaker key={speaker.id}
                        speaker={speaker}
                        showSessions={showSessions}
                        onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id);
                        }} />
                );
            })}
        </div>
    </div>);
}

export default SpeakersList;