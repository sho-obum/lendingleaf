"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// import { NeonGradientCard } from "@/registry/magicui/neon-gradient-card";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

interface HomeSectionProps {
  onGoHome: () => void;
}

interface FormData {
  // Step 1: Basic Information
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  loanAmount?: string;
  dateOfBirth?: string;
  panCardNumber?: string;

  // Step 2: Property Type is captured as propertyType state

  // Step 3: Employment Type is captured as employmentType state

  // Step 4: Employment Details - Salaried
  netMonthlyIncome?: string;
  residencePincode?: string;
  currentEmployer?: string;
  workEmail?: string;
  yearsOfExperience?: string;

  // Step 4: Employment Details - Self Employed Business
  annualTurnover?: string;
  businessType?: string;
  businessPincode?: string;
  yearsInBusiness?: string;
  gstNumber?: string;

  // Step 4: Employment Details - Self Employed Professional
  annualReceipts?: string;
  profession?: string;
  officePincode?: string;
  yearsOfPractice?: string;

  // Step 5: Loan Details
  loanTenure?: string;
  propertyAddress?: string;
  propertyCity?: string;
  propertyState?: string;
  propertyPincode?: string;

  // Terms and conditions
  termsAccepted?: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onGoHome }) => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [employmentType, setEmploymentType] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({});

  const handleNext = () => {
    if (step === 3 && !employmentType) return;
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePropertyTypeSelect = (type: string) => {
    setPropertyType(type);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTermsChange = (checked: boolean) => {
    setFormData({ ...formData, termsAccepted: checked });
  };

  const handleSubmit = () => {
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Form submission logic would go here
    console.log("Form submitted", {
      ...formData,
      propertyType,
      employmentType,
    });
    alert("Thank you! Your application has been submitted successfully.");
  };

  const progressWidth = `${(step / 5) * 100}%`;

  return (
    <div className="w-full min-h-screen px-4 md:px-8 pt-16 pb-16">
      {/* Breadcrumb */}
      <nav className="text-white text-sm mb-8 mt-4">
        <span className="cursor-pointer hover:underline" onClick={onGoHome}>
          Home
        </span>
        <span className="mx-2"> &gt; </span>
        <span className="text-white font-bold">Home Loan</span>
      </nav>

      <div className="max-w-3xl mx-auto relative p-6 md:p-10 bg-white rounded-lg shadow-lg">
        {/* Animated Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Form Header */}
        <div className="mb-8">
          <AnimatedShinyText className="text-2xl md:text-3xl font-bold text-green-600 underline">
            Home Loan Application
          </AnimatedShinyText>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Personal Information
            </h2>

            <form className="grid gap-6">
              <div>
                <label className="block text-black text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  className="w-full border p-3 rounded-lg mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                  value={formData.fullName || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full border p-3 rounded-lg mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                  value={formData.mobileNumber || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded-lg mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Loan Amount (INR)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-black/70">
                    ₹
                  </span>
                  <input
                    type="text"
                    name="loanAmount"
                    placeholder="Enter loan amount"
                    className="w-full border p-3 rounded-lg pl-8 mt-1 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.loanAmount || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="w-full border p-3 rounded-lg mt-1 bg-white/10 border-white/20 text-black"
                  value={formData.dateOfBirth || ""}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </>
        )}

        {/* Step 2: Property Type */}
        {step === 2 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              What is the type of property?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Plot",
                "Commercial Property",
                "Ready Property",
                "Home Extension",
                "Home Improvement",
                "Self Construction",
              ].map((type) => (
                <Button
                  key={type}
                  onClick={() => handlePropertyTypeSelect(type)}
                  className={`border px-6 py-4 rounded-lg transition ${
                    propertyType === type
                      ? "bg-green-500 text-black border-transparent"
                      : "bg-white/10 text-black hover:bg-green-500 hover:text-black border-white/20"
                  }`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </>
        )}

        {/* Step 3: Employment Type */}
        {step === 3 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              What employment type best describes you?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Salaried",
                "Self Employed Professional",
                "Self Employed Business",
              ].map((type) => (
                <Button
                  key={type}
                  onClick={() => setEmploymentType(type)}
                  className={`border px-6 py-4 rounded-lg transition ${
                    employmentType === type
                      ? "bg-green-500 text-black border-transparent"
                      : "bg-white/10 text-black hover:bg-green-500 hover:text-black border-white/20"
                  }`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </>
        )}

        {/* Step 4: Employment Details */}
        {step === 4 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Kindly fill the details below
            </h2>

            {employmentType === "Salaried" && (
              <form className="grid gap-6">
                <div>
                  <label className="block text-black text-sm font-medium">
                    Net Monthly Income
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-black/70">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="netMonthlyIncome"
                      placeholder="Enter monthly income"
                      className="w-full border p-3 rounded-lg pl-8 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                      value={formData.netMonthlyIncome || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Residence Pincode
                  </label>
                  <input
                    type="text"
                    name="residencePincode"
                    placeholder="Enter pincode"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.residencePincode || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Current Employer
                  </label>
                  <input
                    type="text"
                    name="currentEmployer"
                    placeholder="Enter employer name"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.currentEmployer || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Enter work email address"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.workEmail || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name="yearsOfExperience"
                    placeholder="Enter years of experience"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.yearsOfExperience || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            )}

            {employmentType === "Self Employed Business" && (
              <form className="grid gap-6">
                <div>
                  <label className="block text-black text-sm font-medium">
                    Annual Turnover
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-black/70">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="annualTurnover"
                      placeholder="Enter turnover"
                      className="w-full border p-3 rounded-lg pl-8 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                      value={formData.annualTurnover || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Type of Business
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    placeholder="Enter business type"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.businessType || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Business Pincode
                  </label>
                  <input
                    type="text"
                    name="businessPincode"
                    placeholder="Enter pincode"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.businessPincode || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Years in Business
                  </label>
                  <input
                    type="number"
                    name="yearsInBusiness"
                    placeholder="Enter years in business"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.yearsInBusiness || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    GST Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    placeholder="Enter GST number"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.gstNumber || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            )}

            {employmentType === "Self Employed Professional" && (
              <form className="grid gap-6">
                <div>
                  <label className="block text-black text-sm font-medium">
                    Annual Receipts
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-black/70">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="annualReceipts"
                      placeholder="Enter receipts"
                      className="w-full border p-3 rounded-lg pl-8 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                      value={formData.annualReceipts || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Select Your Profession
                  </label>
                  <select
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black"
                    name="profession"
                    value={formData.profession || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select profession</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Chartered Accountant">
                      Chartered Accountant
                    </option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Architect">Architect</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Office Pincode
                  </label>
                  <input
                    type="text"
                    name="officePincode"
                    placeholder="Enter pincode"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.officePincode || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Years of Practice
                  </label>
                  <input
                    type="number"
                    name="yearsOfPractice"
                    placeholder="Enter years of practice"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.yearsOfPractice || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            )}
          </>
        )}

        {/* Step 5: Loan Details */}
        {step === 5 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Additional Loan Details
            </h2>

            <form className="grid gap-6">
              <div>
                <label className="block text-black text-sm font-medium">
                  Loan Tenure (in years)
                </label>
                <select
                  className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black"
                  name="loanTenure"
                  value={formData.loanTenure || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select tenure</option>
                  <option value="5">5 years</option>
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="25">25 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Property Address
                </label>
                <textarea
                  placeholder="Enter property address"
                  className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                  rows={3}
                  name="propertyAddress"
                  value={formData.propertyAddress || ""}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div>
                <label className="block text-black text-sm font-medium">
                  Property City
                </label>
                <input
                  type="text"
                  name="propertyCity"
                  placeholder="Enter city"
                  className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                  value={formData.propertyCity || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-black text-sm font-medium">
                    Property State
                  </label>
                  <select
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black"
                    name="propertyState"
                    value={formData.propertyState || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium">
                    Property Pincode
                  </label>
                  <input
                    type="text"
                    name="propertyPincode"
                    placeholder="Enter pincode"
                    className="w-full border p-3 rounded-lg bg-white/10 border-white/20 text-black placeholder:text-black/50"
                    value={formData.propertyPincode || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="termsConditions"
                    checked={formData.termsAccepted || false}
                    onCheckedChange={handleTermsChange}
                    className="bg-white/10 border-white/20 mt-1"
                  />
                  <label
                    htmlFor="termsConditions"
                    className="text-sm text-black/90"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-green-400 hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and authorize Bajaj Housing Finance and its representatives
                    to contact me with reference to my application.
                  </label>
                </div>
              </div>
            </form>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button
              onClick={handleBack}
              className="bg-white/20 text-black hover:bg-white/30 px-6 py-3 rounded-full"
            >
              Back
            </Button>
          )}

          {step < 5 ? (
            <Button
              onClick={handleNext}
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full ml-auto"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full ml-auto"
            >
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
