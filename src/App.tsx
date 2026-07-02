<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manufacturing Health Check up</title>
    <style>
        :root {
            --primary: #0f172a;
            --accent: #0284c7;
            --green: #22c55e;
            --yellow: #eab308;
            --red: #ef4444;
            --bg: #f8fafc;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg);
            color: var(--primary);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        h1, h2, h3, h4 { color: var(--primary); }
        .section-header {
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8px;
            margin-top: 30px;
            color: var(--accent);
            font-size: 1.2rem;
        }
        .grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 15px;
            margin-bottom: 12px;
            align-items: center;
        }
        .grid-header {
            font-weight: bold;
            color: #64748b;
            font-size: 0.85rem;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        label {
            font-weight: 600;
            font-size: 0.95rem;
        }
        input, select {
            width: 100%;
            padding: 10px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            box-sizing: border-box;
            font-family: inherit;
            background-color: white;
        }
        select:focus, input:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 1px var(--accent);
        }
        button {
            width: 100%;
            background-color: var(--accent);
            color: white;
            border: none;
            padding: 15px;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 20px;
            transition: background 0.2s;
        }
        button:hover { background-color: #0369a1; }
        
        #resultsSection {
            display: none;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 3px dashed #cbd5e1;
        }
        .score-card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }
        .score-card {
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            color: white;
            font-weight: bold;
        }
        .bg-red { background-color: var(--red); }
        .bg-yellow { background-color: var(--yellow); color: #451a03; }
        .bg-green { background-color: var(--green); }
        
        .solution-box {
            background-color: #f1f5f9;
            border-left: 5px solid var(--accent);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 0 8px 8px 0;
        }
        .solution-box h4 { margin: 0 0 8px 0; color: #1e293b; font-size: 1.1rem; }
        .meta-info {
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 0.85rem;
            font-weight: bold;
            color: #475569;
            background: #e2e8f0;
            padding: 8px 12px;
            border-radius: 4px;
            width: fit-content;
        }
        
        .consultant-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            gap: 20px;
        }
        .consultant-avatar {
            width: 70px;
            height: 70px;
            background: var(--accent);
            color: white;
            font-size: 1.8rem;
            font-weight: bold;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .contact-box {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            text-align: center;
            padding: 30px;
            border-radius: 8px;
            margin-top: 25px;
        }
        .contact-box h3 { color: white; margin-top: 0; }
        .contact-box p { color: #94a3b8; }
        .contact-link {
            color: #38bdf8;
            font-weight: bold;
            text-decoration: none;
            font-size: 1.2rem;
        }
        .print-btn {
            background-color: #475569;
            margin-top: 10px;
        }
        .print-btn:hover { background-color: #334155; }
    </style>
</head>
<body>

<div class="container">
    <h1>🏭 Industrial Manufacturing Health Check UP</h1>
    <p>Analyze how core operational performance metrics leak financial resources. Input current statistics to see specialized deployment fixes from VARENYA Consultant.</p>
    
    <form id="auditForm" onsubmit="calculateAnalysis(event)">
        
        <div class="grid" style="margin-bottom: 0;">
            <div class="grid-header">Operational Parameters</div>
            <div class="grid-header">Current Value</div>
        </div>

        <div class="grid">
            <label for="curr_oee">1. Overall Equipment Effectiveness (OEE) % <br><small style="font-weight:normal;color:#64748b;">Measures overall asset availability, performance, and line speed.</small></label>
            <input type="number" id="curr_oee" step="0.1" min="0" max="100" required placeholder="e.g., 72">
            <input type="hidden" id="tgt_oee" value="85">
        </div>

        <div class="grid">
            <label for="curr_fpy">2. First Pass Yield (FPY) % <br><small style="font-weight:normal;color:#64748b;">Percentage of units manufactured correctly the first time without rework.</small></label>
            <input type="number" id="curr_fpy" step="0.1" min="0" max="100" required placeholder="e.g., 90">
            <input type="hidden" id="tgt_fpy" value="98">
        </div>

        <div class="grid">
            <label for="curr_scrap">3. Material Scrap & Wastage Rate % <br><small style="font-weight:normal;color:#64748b;">Raw material thrown away or lost during production changes.</small></label>
            <input type="number" id="curr_scrap" step="0.1" min="0" max="100" required placeholder="e.g., 3.5">
            <input type="hidden" id="tgt_scrap" value="1.0">
        </div>

        <div class="grid">
            <label for="curr_downtime">4. Unplanned Downtime Hours / Month <br><small style="font-weight:normal;color:#64748b;">Unexpected equipment breakdowns cutting into standard shifts.</small></label>
            <input type="number" id="curr_downtime" min="0" required placeholder="e.g., 45">
            <input type="hidden" id="tgt_downtime" value="10">
        </div>

        <div class="grid">
            <label for="curr_energy">5. Energy / Resource Overhead Cost Variance % <br><small style="font-weight:normal;color:#64748b;">Current power/water/gas usage relative to standard target budget (100%).</small></label>
            <input type="number" id="curr_energy" step="0.1" min="0" required placeholder="e.g., 118">
            <input type="hidden" id="tgt_energy" value="100">
        </div>

        <div class="grid">
            <label for="industry_sector">6. Manufacturing Industry Sector <br><small style="font-weight:normal;color:#64748b;">Select your core facility field for context-specific analysis reports.</small></label>
            <select id="industry_sector" required>
                <option value="" disabled selected hidden>Choose your sector...</option>
                <option value="solar">Solar & Renewable Energy</option>
                <option value="epc">Engineering, Procurement & Construction (EPC)</option>
                <option value="power">Power Sectors</option>
                <option value="automotive">Automotive Infrastructure</option>
                <option value="electronics">High-Mix PCB / SMT Electronics</option>
            </select>
        </div>

        <button type="submit">📊 Process Diagnostic Evaluation</button>
    </form>

    <div id="resultsSection">
        <h2>📋 Diagnostic Evaluation Results</h2>
        
        <div class="score-card-grid">
            <div id="card_ops" class="score-card">Operational Stability Score: <span id="val_ops">0</span>%</div>
            <div id="card_fin" class="score-card">Financial Containment Score: <span id="val_fin">0</span>%</div>
        </div>

        <h3>💡 Remediation Strategies & Project Timelines <span id="selectedSectorText" style="font-size: 1rem; color: #64748b; font-weight: normal; margin-left: 10px;"></span></h3>
        <div id="solutionsContainer"></div>
        
        <div class="section-header">📋 Assigned Lead Expert Information</div>
        <div class="consultant-card">
            <div class="consultant-avatar">VC</div>
            <div>
                <h4 style="margin: 0 0 5px 0;">VARENYA Consultant</h4>
                <p style="margin: 0; color: #64748b; font-size: 0.9rem;">Principal Industrial & Clean-Tech Manufacturing Advisory Group</p>
                <p style="margin: 5px 0 0 0; color: #475569; font-size: 0.85rem;">Specialization: Industrial Automation Architectures, Waste Reduction, & Operational Profitability Optimization</p>
            </div>
        </div>

        <div class="contact-box">
            <h3>📞 Contact Us To Deploy Solutions</h3>
            <p>Ready to reclaim lost manufacturing margins? Connect directly with our engineering advisory desk to plan an operational audit validation.</p>
            <a href="mailto:VarenyaMail@gmail.com?subject=Manufacturing Optimization Deep-Dive Portfolio Consultation" class="contact-link">📧 Email Us: VarenyaMail@gmail.com</a>
            <p style="margin-top:12px; font-size:1.1rem; color:#ffffff; font-weight: bold;">📱 Mobile Contact Hotline: +91 7990077188</p>
        </div>

        <button class="print-btn" onclick="window.print()">📥 Print / Save Solution Report as PDF</button>
    </div>
</div>

<script>
    function getStatusClass(score) {
        if (score >= 95) return 'bg-green';
        if (score >= 80) return 'bg-yellow';
        return 'bg-red';
    }

    function calculateAnalysis(event) {
        event.preventDefault();

        const oeeCurr = parseFloat(document.getElementById('curr_oee').value);
        const oeeTgt = parseFloat(document.getElementById('tgt_oee').value);
        const fpyCurr = parseFloat(document.getElementById('curr_fpy').value);
        const fpyTgt = parseFloat(document.getElementById('tgt_fpy').value);
        const scrapCurr = parseFloat(document.getElementById('curr_scrap').value);
        const scrapTgt = parseFloat(document.getElementById('tgt_scrap').value);
        const downCurr = parseFloat(document.getElementById('curr_downtime').value);
        const downTgt = parseFloat(document.getElementById('tgt_downtime').value);
        const energyCurr = parseFloat(document.getElementById('curr_energy').value);
        const energyTgt = parseFloat(document.getElementById('tgt_energy').value);
        
        // Grab the selected text from dropdown to append to heading reports
        const sectorSelect = document.getElementById('industry_sector');
        const selectedSectorName = sectorSelect.options[sectorSelect.selectedIndex].text;

        const opsScore = Math.round((((oeeCurr/oeeTgt) + (fpyCurr/fpyTgt)) / 2) * 100);
        const finScore = Math.round((((scrapTgt/scrapCurr) + (downTgt/downCurr) + (energyTgt/energyCurr)) / 3) * 100);

        document.getElementById('val_ops').innerText = opsScore;
        document.getElementById('card_ops').className = `score-card ${getStatusClass(opsScore)}`;
        
        document.getElementById('val_fin').innerText = finScore;
        document.getElementById('card_fin').className = `score-card ${getStatusClass(finScore)}`;
        
        // Output selected sector context directly to results header panel
        document.getElementById('selectedSectorText').innerText = `[ Benchmark Domain: ${selectedSectorName} ]`;

        let solutionsHtml = "";

        if ((oeeCurr / oeeTgt) < 0.95 || downCurr > downTgt) {
            solutionsHtml += `
                <div class="solution-box">
                    <h4>⚙️ Operational Stability Solution: Deploy Smart Condition-Based Predictive Maintenance (PdM)</h4>
                    <p>Elevated mechanical failures and depressed OEE directly deplete capacity volumes and rack up expensive expediting fees. Implementing edge IoT vibration telemetry tracking profiles across primary production bottlenecks shifts your facility away from costly reactive fixes toward planned maintenance loops.</p>
                    <div class="meta-info">
                        <span>⏳ Implementation Duration: 4 - 6 Weeks</span>
                        <span>👤 Lead Advisor: VARENYA Consultant</span>
                    </div>
                </div>`;
        }

        if (scrapCurr > scrapTgt || (fpyCurr / fpyTgt) < 0.95) {
            solutionsHtml += `
                <div class="solution-box">
                    <h4>💎 Financial Solution: Establish Inline Quality Gate Controls & SPC Protocols</h4>
                    <p>Failing to secure first-pass parameters burns direct material value and stacks hidden factory labor rework costs. By deploying localized Automated Optical Inspection (AOI) sensor nodes combined with rigid Statistical Process Control tracking, errors are corrected mid-stream before becoming massive scrap liabilities.</p>
                    <div class="meta-info">
                        <span>⏳ Implementation Duration: 3 - 5 Weeks</span>
                        <span>👤 Lead Advisor: VARENYA Consultant</span>
                    </div>
                </div>`;
        }

        if (energyCurr > energyTgt) {
            solutionsHtml += `
                <div class="solution-box">
                    <h4>⚡ Utility Resource Solution: Implement Peak Demand Load Balancing Protocols</h4>
                    <p>Excess energy utility cost intensity indicators suggest active process heating/cooling or heavy mechanical runtime spikes occurring outside of primary economic cycles. Running structured resource scheduling software reduces basic fixed overhead allocations significantly.</p>
                    <div class="meta-info">
                        <span>⏳ Implementation Duration: 2 - 4 Weeks</span>
                        <span>👤 Lead Advisor: VARENYA Consultant Support Desk</span>
                    </div>
                </div>`;
        }

        if(solutionsHtml === "") {
            solutionsHtml = `
                <div class="solution-box" style="border-left-color: var(--green)">
                    <h4>🎉 Factory Operating in Top Tier Threshold</h4>
                    <p>Calculated balances verify total execution is running flawlessly in alignment with baseline benchmarks. No critical structural corrections required.</p>
                </div>`;
        }

        document.getElementById('solutionsContainer').innerHTML = solutionsHtml;
        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
    }
</script>

</body>
</html>
