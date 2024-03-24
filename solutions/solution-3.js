function calcNetSalary(basicSalary, benefits) {
    
    // Tax calculation
    const taxRate = 0.10; 
    const tax = basicSalary * taxRate;
    
    // NHIF Deductions 
    const nhifDeductions = 750; 

    // NSSF Deductions
    const nssfRate = 0.06; 
    const nssfDeductions = basicSalary * nssfRate;
    
    // Gross Salary
    const grossSalary = basicSalary + benefits;
    
    // Net Salary calculation
    const deductionsTotal = tax + nhifDeductions + nssfDeductions;
    const netSalary = grossSalary - deductionsTotal;

    return {
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        grossSalary: grossSalary,
        netSalary: netSalary
    };
    
}

calcNetSalary () //as arguements enter basic salary and benefits