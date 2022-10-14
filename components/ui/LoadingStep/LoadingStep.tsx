import Spinner from "@components/icons/Spinner"
import Check from "@components/icons/Check"

type Props = {
  initCondition: boolean
  uploadState: string
  endState?: string | JSX.Element
  nullCondition?: boolean
  waitingState?: string
}

const LoadingStep = ({
  initCondition,
  uploadState,
  endState = uploadState,
  nullCondition = false,
  waitingState = "Waiting..."
}: Props) => {
  return (
    <>
      <div className="flex items-center justify-center">
        {!nullCondition ? (
          initCondition ? (
            <Spinner size="h-6 w-6" />
          ) : (
            <Check className="text-green-500" />
          )
        ) : null}
      </div>
      <div className="col-span-5 ml-2 text-left">
        <p className={nullCondition ? "text-gray-400" : ""}>
          {!nullCondition
            ? initCondition
              ? uploadState
              : endState
            : waitingState}
        </p>
      </div>
    </>
  )
}

export default LoadingStep
