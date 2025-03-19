"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface HomeSectionProps {
  onGoHome: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onGoHome }) => {
  const [step, setStep] = useState(1);
  const [employmentType, setEmploymentType] = useState<string | null>(null);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const progressWidth = `${(step / 4) * 100}%`;

  return (
    <div className="w-full min-h-screen px-8 py-16">
      
      {/* Breadcrumb */}
      <nav className="text-white text-sm mb-12 mt-8">
        <span
          className="cursor-pointer hover:underline"
          onClick={onGoHome}
        >
          Home
        </span>
        <span className="mx-2"> &gt; </span>  
        <span className="text-gray-300 font-bold">Home Loan</span>
      </nav>

      <div className="bg-white/90 rounded-lg shadow-lg p-10 max-w-2xl mx-auto relative overflow-hidden">
        
        {/* Animated Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Home Loan Application</h2>

            <form className="grid gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border p-3 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium">Number</label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="w-full border p-3 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium">Loan Amount (INR)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-500">₹</span>
                  <input
                    type="text"
                    placeholder="Enter loan amount"
                    className="w-full border p-3 rounded-lg pl-8 mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium">Date of Birth</label>
                <input
                  type="date"
                  className="w-full border p-3 rounded-lg mt-1"
                />
              </div>
            </form>
          </>
        )}

        {/* Step 2: Property Type */}
        {step === 2 && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What is the type of property?</h2>

            <div className="grid grid-cols-2 gap-4">
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
                  className="bg-gray-100 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg hover:bg-green-500 hover:text-white transition"
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What employment type best describes you?</h2>

            <div className="grid grid-cols-2 gap-4">
              {["Salaried", "Self Employed Professional", "Self Employed Business"].map((type) => (
                <Button
                  key={type}
                  onClick={() => setEmploymentType(type)}
                  className={`border px-6 py-4 rounded-lg transition ${
                    employmentType === type
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-green-500 hover:text-white"
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Kindly fill the details below</h2>

            <form className="grid gap-6">
              {/* Salaried */}
              {employmentType === "Salaried" && (
                <>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium">Net Monthly Income</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Enter monthly income"
                        className="w-full border p-3 rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Type your company name"
                        className="w-full border p-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium">Residence Pincode</label>
                    <input
                      type="text"
                      placeholder="Enter residence pincode"
                      className="w-full border p-3 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium">Salary Credited in Bank?</label>
                    <select className="w-full border p-3 rounded-lg">
                      <option>Select Bank</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>SBI</option>
                      <option>Punjab National Bank</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium">Office Pincode</label>
                    <input
                      type="text"
                      placeholder="Enter office pincode"
                      className="w-full border p-3 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium">PAN</label>
                    <input
                      type="text"
                      placeholder="Enter PAN"
                      className="w-full border p-3 rounded-lg"
                    />
                  </div>
                </>
              )}
            </form>

            {/* Checkboxes */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox />
                <p className="text-sm text-gray-600">
                  I accept <span className="text-green-500">Privacy Policy</span> and{" "}
                  <span className="text-green-500">Terms and Conditions</span> of LendingLeaf.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox />
                <p className="text-sm text-gray-600">
                  Allow LendingLeaf to send messages on WhatsApp.
                </p>
              </div>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button onClick={handleBack} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400">
              Back
            </Button>
          )}

          {step < 4 ? (
            <Button onClick={handleNext} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full">
              Next
            </Button>
          ) : (
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">Submit</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
