import React, { useEffect, useState } from 'react'
import { Card, Feed, Icon,Button } from 'semantic-ui-react'
import {SocialMediaService} from "../../../services/candidate/candidateSocialMediaService"
import SocialMediaModal from "../../candidateModals/SocialMediaModal"

export default function CandidateSocialMediaList() {
  let candidateSocialMediaService = new SocialMediaService()

    const [socialMedia, setSocialMedia] = useState([])
    useEffect(() => {
        candidateSocialMediaService.getByCandidateId(5).then((res) => setSocialMedia(res.data))
    }, [socialMedia])
    const deleteSocialMedia = (id) => {
      candidateSocialMediaService.delete(id).then((result) => console.log(result.data));
    }
    return (
        <Card.Group>
            {socialMedia.map((socialmedia) => (
                <Card key={socialmedia.id}>
    <Card.Content>
      <Card.Header>Sosyal Medya</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Icon name="github"/>
          <Feed.Content>
            <Feed.Summary>
              {socialmedia.githubLink}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Icon name="linkedin"/>
          <Feed.Content>
            <Feed.Summary>
             {socialmedia.linkedinLink}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
    <div className="ui-two-buttons">
         <SocialMediaModal/><Button onClick={() => deleteSocialMedia(socialmedia.id)} basic color ="red">Sil</Button>
    </div>
   
  </Card>
            ))}
  </Card.Group>
    )
}
