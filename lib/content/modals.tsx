import { Button, DoubleText, LoadingStep } from "@components/ui"

export type View = {
  name: ViewNames
  cross?: boolean
  params?: object
}
type ViewNames = "" | "SETUP"

export const SETUP = (params: any) => {
  const { uploadStep, setModalView, slicerId } = params

  let uploadState: string
  switch (uploadStep) {
    case 1:
      uploadState = "Delegating safe ..."
      break
    case 2:
      uploadState = "Creating slicer ..."
      break
    case 3:
      uploadState = "Something went wrong"
      break
    case 4:
      uploadState = "Success"
      break
  }
  return (
    <div className="text-center">
      <div className="pb-6 text-center">
        <DoubleText inactive logoText="Setting up" />
      </div>
      <p className="pb-8">Please wait until the process is completed</p>
      <div className="grid items-center grid-cols-6 gap-2 px-4">
        <LoadingStep
          initCondition={uploadStep < 2}
          uploadState={uploadState}
          endState={uploadStep != 3 ? "Safe delegated" : "Reverted"}
        />
        <LoadingStep
          nullCondition={uploadStep < 2}
          initCondition={uploadStep < 3}
          uploadState={uploadState}
          waitingState="Slicer creation"
          endState={uploadStep != 3 ? "Slicer created" : "Reverted"}
        />
      </div>
      <div className="pt-10">
        {uploadStep > 2 ? (
          <>
            {uploadStep == 4 && (
              <p className="pb-6 text-sm xs:px-10">
                You&apos;re set! Your slicer has ID {slicerId}. Now go back to
                your repository to finish setting up the Github action.
              </p>
            )}
            <Button
              label="Go back"
              onClick={() => setModalView({ name: "" })}
            />
          </>
        ) : (
          <p className="max-w-sm mx-auto text-sm font-bold text-yellow-600">
            Do not leave this page until the process has completed
          </p>
        )}
      </div>
    </div>
  )
}
