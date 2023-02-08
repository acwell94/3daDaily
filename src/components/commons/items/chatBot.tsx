import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
// import { Configuration, OpenAIApi } from "openai";
import styled from "styled-components";
import axios from "axios";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../../../public/icon/loading.gif";
import Image from "next/image";
import Bot from "../../../../public/icon/botIcon.png";
import User from "../../../../public/icon/profile.png";

interface IProps {
  isVisible: boolean;
  chatBotHandler?: () => void;
}

const Title = styled.div`
  ${flexBox("row", "between", "center")}
  width: 100%;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.darkGray};
`;

const Main = styled.div<IProps>`
  ${flexBox("col", "center", "center")}
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  width: 25%;
  height: 70%;
  padding: 3rem;
  background-color: ${theme.colors.lightPurple};
  border-radius: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  overflow: scroll;
`;
const ChatBox = styled.div`
  ${flexBox("row", "start", "start")}
  margin-bottom: 2rem;
`;

const Chat = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.mainPurple};
  border-radius: 16px;
  margin-bottom: 1rem;
`;

const AnswerChat = styled.div`
  ${flexBox("row", "start", "center")}
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: ${theme.colors.lightPink};
  border-radius: 16px;
`;

const LoadingBox = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
`;

const QuestionBox = styled.div`
  ${flexBox("row", "between", "center")}
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.deepPurple};
  border-radius: 8px;
`;

const ChatProfileBox = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-right: 1rem;
`;
const ChatUserProfileBox = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-left: 1rem;
`;
const ChatProfile = styled(Image)``;

const LoadingIcon = styled(Image)``;

const ChatInput = styled.input`
  width: 70%;
  padding: 1.2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  :disabled {
    background-color: ${theme.colors.sliverGray};
  }
`;

const ChatBot = ({ isVisible, chatBotHandler }: IProps) => {
  const [questions, setQuestions] = useState<any>();
  const [chat, setChat] = useState<any>([]);
  const [waitAnswer, setWaitAnswer] = useState(false);

  const chatAi = async (data: string) => {
    try {
      const pos = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `${data}`,
          temperature: 0.9,
          max_tokens: 521,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
          },
        },
      );
      console.log(pos);

      setChat((prev: any) => [
        ...prev,
        { text: pos.data.choices[0].text, id: pos.data.id },
      ]);
      setWaitAnswer((prev) => !prev);
    } catch (error) {
      console.log(error);
      setWaitAnswer((prev) => !prev);
      alert("오류가 발생하였습니다.");
      setQuestions("");
      setChat([]);
    }
  };

  const questionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestions(e.target.value);
  };

  const submitQuestion = (): any => {
    if (!questions) {
      return null;
    }
    setWaitAnswer((prev) => !prev);
    setChat((prev: any) => [...prev, { text: questions, id: uuidv4() }]);
    chatAi(questions);
    setQuestions("");
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitQuestion();
    }
  };
  return (
    <Main isVisible={isVisible}>
      <Title>
        <div></div>
        ChatBot에게 질문해 보세요
        <div style={{ cursor: "pointer" }} onClick={chatBotHandler}>
          X
        </div>
      </Title>
      <Box>
        {chat.map((el: any, idx: number) => (
          <React.Fragment key={el.id}>
            {idx % 2 === 0 ? (
              <ChatBox>
                <Chat>{el.text}</Chat>
                <ChatUserProfileBox>
                  <ChatProfile src={User} alt="User" fill={true} />
                </ChatUserProfileBox>
              </ChatBox>
            ) : (
              <ChatBox>
                <ChatProfileBox>
                  <ChatProfile src={Bot} alt="User" fill={true} />
                </ChatProfileBox>
                <AnswerChat>{el.text}</AnswerChat>
              </ChatBox>
            )}
          </React.Fragment>
        ))}
      </Box>

      <QuestionBox>
        <ChatInput
          onChange={questionsHandler}
          value={questions || ""}
          onKeyDown={onKeyPress}
          disabled={waitAnswer}
          placeholder="챗봇에게 물어보기"
        />
        <SubmitButton
          type="submit"
          onClick={submitQuestion}
          disabled={waitAnswer}
        >
          {waitAnswer ? (
            <LoadingBox>
              <LoadingIcon src={Loading} alt="Loading" fill={true} />
            </LoadingBox>
          ) : (
            <>전송</>
          )}
        </SubmitButton>
      </QuestionBox>
    </Main>
  );
};

export default ChatBot;
