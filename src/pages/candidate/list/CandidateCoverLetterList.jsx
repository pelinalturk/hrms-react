import React, { useEffect, useState } from "react";
import { Card, Feed, Button } from "semantic-ui-react";
import { CoverLetterService } from "../../../services/candidate/candidateCoverLetterService";
import CoverLetterModal from "../../candidateModals/CoverLetterModal";

export default function CandidateCoverLetterList() {
  let candidateCoverLetterService = new CoverLetterService();
  const [coverLetter, setCoverLetter] = useState([]);
  useEffect(() => {
    candidateCoverLetterService
      .getByCandidateId(5)
      .then((res) => setCoverLetter(res.data));
  }, [coverLetter]);

  const deleteCoverLetter = (id) => {
    candidateCoverLetterService.delete(id).then((result) => console.log(result.data));
  }
  return (
    <Card.Group>
     
        <Card>
          <Card.Content>
            <Card.Header>Hakkımda</Card.Header>
          </Card.Content>
          <Card.Content>
             {coverLetter.map((coverletter) => (
            <Feed key={coverletter.id}>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>{coverletter.coverLetter}</Feed.Summary>
                  <Button onClick={() => deleteCoverLetter(coverletter.id)} basic color ="red">Sil</Button>
                </Feed.Content>
              </Feed.Event>
            </Feed>))}
          </Card.Content>
          <div className="ui-two-buttons">
            <CoverLetterModal/>
       
    </div>
        </Card>
      
    </Card.Group>
  );
}
