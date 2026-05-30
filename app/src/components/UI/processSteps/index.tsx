type Step = {
  step: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="flex flex-col w-full max-w-6xl">
      {steps.map((item, index) => {
        return (
          <div key={index} className="flex md:gap-12 gap-4 max-md:pr-2">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-red shrink-0" />
              <div className="w-px flex-1 bg-red" />
            </div>

            <div className={`${index === steps.length - 1 ? "pb-0" : "pb-12"}`}>
              <p className="text-red uppercase font-semibold text-[11px] tracking-[2px] mb-1">
                {item.step}
              </p>
              <h3 className="text-white md:mb-2 mb-1">{item.title}</h3>
              <p className="text-white/55">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
