import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ContentHeader({ channel }) {
  return (
    <ContentHeaderHolder>
      <HeaderInfo>
        <HeaderTitle>
          <span># {channel && channel.name}</span> <StarBorderIcon />
        </HeaderTitle>
        <TopicInfo>Company-wide announcements and work-based matters</TopicInfo>
      </HeaderInfo>
      <InfoDetails>
        <span>Details</span> <InfoOutlinedIcon />
      </InfoDetails>
    </ContentHeaderHolder>
  );
}

export default ContentHeader

const ContentHeaderHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 20px;
  border-bottom: 1px solid #ddd;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`

const HeaderInfo = styled.div``;
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    margin-right: 4px;
  }
`;

const TopicInfo = styled.div`
  font-size: 12px;
  line-height: 1;
  padding-top: 5px;

`;

const InfoDetails = styled.div`
  font-size: 12px;
  line-height: 1;
  display: flex;
  align-items: center;

  span {
    margin-right: 4px;
  }
`;