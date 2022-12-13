import './AllData.css';
import {useContext} from 'react';
import {GlobalContext} from '../GlobalContext';

export const AllData = () => {
  const {state} = useContext(GlobalContext);
  const {currentUser} = state;

  return (
      <div className="PageWrapper">
        <div className="AllData CardStyling card mb-3">
          <div className="card-header">User Activity</div>
          <div className="card-body">
            {
                currentUser?.submissions.length > 0 &&
                <ul className="list-group">
                  {
                      currentUser.submissions.map((submission, idx) => {
                      return (
                          <li key={idx} className="list-group-item">
                            {currentUser.name} <strong>{submission.action === 'withdraw' ?
                              'withdrew' :
                              'deposited'}</strong> {submission.sum}
                          </li>
                      );
                    })
                  }
                </ul>
            }
            {
                currentUser?.submissions.length === 0 &&
                <p>No activity yet</p>
            }
          </div>
        </div>
      </div>
  );
};
