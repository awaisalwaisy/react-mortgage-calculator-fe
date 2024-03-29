type FieldValues = "principleLoanAmount" | "interestRate" | "termOfLoan";

interface ControlParams {
  setData: React.Dispatch<React.SetStateAction<Record<FieldValues, number>>>;
}

interface MortgageCalcParams {
  data: Record<FieldValues, number>;
}
