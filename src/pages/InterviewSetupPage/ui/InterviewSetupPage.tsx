import styles from "./InterviewSetupPage.module.css";
import { ChooseSkills } from "../../../features/Skill/ChooseSkills";
import { ChooseQuestionCount } from "../../../features/Question/ChooseQuestionCount";
import { ChooseQuestionComplexity } from "../../../features/Question/ChooseQuestionComplexity";
import { ChooseQuestionMode } from "../../../features/Question/ChooseQuestionMode";
import { StartInterviewButton } from "../../../features/Interview/startInterviewButton";

export const InterviewSetupPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.left}>
            <ChooseSkills />
          </div>
          <div className={styles.right}>
            <ChooseQuestionComplexity />
            <ChooseQuestionMode />
            <ChooseQuestionCount />

            <div className={styles.startWrapper}>
              <StartInterviewButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
