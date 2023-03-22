
export  function ErrorMessageInput({error}: {error: string | undefined}):JSX.Element {
  const hasError = Boolean(error);
  return (
    <>
        {hasError && <span role="alert" className="input-error text-sm">{error}</span>}
    </>
  )
}
