import { Modal } from "../../../shared/ui/Modal/Modal";
import { Button } from "../../../shared/ui/Button/Button";
import styles from "./ExitInterviewModal.module.css";
import { ExitInterviewModalProps } from "../types";

export const ExitInterviewModal = ({ onConfirm, onCancel }: ExitInterviewModalProps) => {
  return (
    <Modal onClose={onCancel}>
      <p className={styles.title}>Вы хотите прервать прохождение собеседования?</p>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>При этом неотвеченные вопросы будут помечены как — Не знаю</p>
      <div className={styles.actions}>
        <button className={styles.yes} onClick={onConfirm}>
          Да
        </button>
        <button className={styles.no} onClick={onCancel}>
          Нет
        </button>
      </div>
    </Modal>
  );
};
