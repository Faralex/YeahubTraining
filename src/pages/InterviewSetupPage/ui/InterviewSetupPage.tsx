import styles from "./InterviewSetupPage.module.css";
import { ChooseSkills } from "../../../features/ChooseSkills";
import { ChooseQuestionCount } from "../../../features/ChooseQuestionCount";
import { ChooseQuestionComplexity } from "../../../features/ChooseQuestionComplexity";
import { ChooseQuestionMode } from "../../../features/ChooseQuestionMode";
import { StartInterviewButton } from "../../../features/startInterviewButton";

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
