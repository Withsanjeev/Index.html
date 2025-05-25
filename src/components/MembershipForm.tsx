
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    spouseFirstName: "",
    spouseLastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    organizationName: "",
    organizationAddress: "",
    pension: "",
    workEmail: "",
    provinceName: "",
    district: "",
    municipality: "",
    ward: "",
    permanentState: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Membership application submitted successfully!");
    // No need to close dialog anymore
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      spouseFirstName: "",
      spouseLastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      organizationName: "",
      organizationAddress: "",
      pension: "",
      workEmail: "",
      provinceName: "",
      district: "",
      municipality: "",
      ward: "",
      permanentState: ""
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="text-center mb-5">
        <img 
          src="/lovable-uploads/8b09d9e1-7de8-4b1d-85cf-6ac72229eb95.png" 
          alt="R.E.S.T Logo" 
          className="w-20 h-20 mx-auto mb-2 object-contain"
        />
        
        <img 
          src="/lovable-uploads/ae42f470-37b5-4504-8ee4-d3f38c815c63.png" 
          alt="Nepal Telecom Employees Society Logo" 
          className="w-28 h-28 mx-auto mb-2 object-contain"
        />
        
        <div className="mb-2 text-left">
          <p className="text-lg">To,</p>
          <p className="text-lg font-medium">The President,</p>
          <p className="text-lg">Nepal Telecommunications Employees Association.</p>
        </div>
        
        <div className="text-left mb-2">
          <p className="mb-2">Sir/Madam,</p>
          <p>
            I am applying for lifetime/general membership of the Nepal Telecommunications Employees 
            Association by submitting my personal details. I agree to abide by the statute, rules, 
            and decisions of the association.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[#0a192f] text-white p-3 mb-4">
          <h3 className="text-lg font-medium">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-base">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-base">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="spouseFirstName" className="text-base">
              Spouse's First Name
            </Label>
            <Input
              id="spouseFirstName"
              name="spouseFirstName"
              value={formData.spouseFirstName}
              onChange={handleChange}
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="spouseLastName" className="text-base">
              Spouse's Last Name
            </Label>
            <Input
              id="spouseLastName"
              name="spouseLastName"
              value={formData.spouseLastName}
              onChange={handleChange}
              className="text-base"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address" className="text-base">
            Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="text-base"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-base">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state" className="text-base">State</Label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select State</option>
              <option value="Province 1">Province 1</option>
              <option value="Province 2">Province 2</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Gandaki">Gandaki</option>
              <option value="Lumbini">Lumbini</option>
              <option value="Karnali">Karnali</option>
              <option value="Sudurpashchim">Sudurpashchim</option>
            </select>
          </div>
        </div>

        <div className="bg-[#0a192f] text-white p-3 mb-4">
          <h3 className="text-lg font-medium">Organization Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="organizationName" className="text-base">
              Organization <span className="text-red-500">*</span>
            </Label>
            <Input
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organizationAddress" className="text-base">
              Address
            </Label>
            <Input
              id="organizationAddress"
              name="organizationAddress"
              value={formData.organizationAddress}
              onChange={handleChange}
              className="text-base"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="pension" className="text-base">
              Pension <span className="text-red-500">*</span>
            </Label>
            <Input
              id="pension"
              name="pension"
              value={formData.pension}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="workEmail" className="text-base">
              Work Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="workEmail"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>
        </div>

        <div className="bg-[#0a192f] text-white p-3 mb-4">
          <h3 className="text-lg font-medium">Permanent Address</h3>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="provinceName" className="text-base">
            Province Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="provinceName"
            name="provinceName"
            value={formData.provinceName}
            onChange={handleChange}
            required
            className="text-base"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="district" className="text-base">
            District <span className="text-red-500">*</span>
          </Label>
          <Input
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="text-base"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="municipality" className="text-base">
            Municipality/Metropolitan <span className="text-red-500">*</span>
          </Label>
          <Input
            id="municipality"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
            className="text-base"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="ward" className="text-base">Ward No</Label>
            <Input
              id="ward"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="permanentState" className="text-base">State</Label>
            <select
              id="permanentState"
              name="permanentState"
              value={formData.permanentState}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select State</option>
              <option value="Province 1">Province 1</option>
              <option value="Province 2">Province 2</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Gandaki">Gandaki</option>
              <option value="Lumbini">Lumbini</option>
              <option value="Karnali">Karnali</option>
              <option value="Sudurpashchim">Sudurpashchim</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-end gap-4 pt-6">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleReset} 
            className="text-lg"
          >
            Reset
          </Button>
          <Button 
            type="submit" 
            className="bg-[#0a192f] hover:bg-[#0a192f]/90 text-white text-lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
