import React from "react";
 
interface QuizFooterProps {
  currentQuestion: number;
  totalQuestions: number;
  onContinue: () => void;
  isAnswerSelected: boolean;
  isLastQuestion?: boolean;
}
 
const QuizFooter: React.FC<QuizFooterProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;
 
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
      <div className="flex mx-auto max-w-2xl">
        <div className="flex w-full flex-row items-center gap-4">
          <span className="text-sm text-gray-600">
            {currentQuestion}/{totalQuestions}
          </span>
         
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-500 transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default QuizFooter;