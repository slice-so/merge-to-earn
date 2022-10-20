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
      uploadState = "Delegating Safe ..."
      break
    case 2:
      uploadState = "Creating Slicer ..."
      break
    case 3:
      uploadState = "Something went wrong"
      break
    case 4:
      uploadState = "Finalizing"
      break
    case 5:
      uploadState = "Finalized"
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
          endState={
            uploadStep != 3 ? (
              <>
                Created{" "}
                <a
                  href={`https://${
                    process.env.NEXT_PUBLIC_ENV === "goerli" ? "testnet." : ""
                  }slice.so/slicer/${slicerId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="highlight"
                >
                  Slicer #{slicerId}
                </a>
              </>
            ) : (
              "Reverted"
            )
          }
        />
        <LoadingStep
          nullCondition={uploadStep < 3}
          initCondition={uploadStep == 4}
          uploadState={uploadState}
          waitingState="Finalization"
          endState={uploadStep != 3 ? "Repo set up" : "Reverted"}
        />
      </div>
      <div className="pt-8">
        {uploadStep > 2 ? (
          <>
            {uploadStep == 4 && (
              <p className="pb-6 text-sm xs:px-10">
                Finish setting up the workflow for your repository on{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="highlight"
                >
                  Github
                </a>
                .
              </p>
            )}
            <Button
              label="Go back"
              onClick={() => setModalView({ name: "" })}
            />
          </>
        ) : (
          <p className="max-w-sm mx-auto text-sm font-medium text-yellow-600">
            Wait until the process is completed
          </p>
        )}
      </div>
    </div>
  )
}
