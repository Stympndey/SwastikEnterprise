const serviceProcessData = {
    "Fabrication & Erection of all type Piping Job": [
        { title: "Client Consultation & Scope Definition", description: "Understanding project requirements, specifications, and client expectations." },
        { title: "Detailed Engineering & Design", description: "Developing precise CAD models, P&IDs, and fabrication drawings." },
        { title: "Material Procurement & Inspection", description: "Sourcing high-quality materials, followed by rigorous quality checks." },
        { title: "Fabrication & Pre-Assembly", description: "Cutting, welding, and assembling piping spools and structures in controlled environments." },
        { title: "Quality Assurance & Testing", description: "Non-destructive testing (NDT), hydrostatic testing, and visual inspections." },
        { title: "Logistics & Transportation", description: "Safe and timely delivery of fabricated components to the site." },
        { title: "On-site Erection & Installation", description: "Precision assembly and installation of piping systems and structures." },
        { title: "Final Commissioning & Handover", description: "System checks, performance verification, and comprehensive documentation." }
    ],
    "Cross Country Water, Oil & Gases Pipeline": [
        { title: "Route Survey & Feasibility Study", description: "Analyzing terrain, environmental impacts, and regulatory requirements." },
        { title: "Land Acquisition & Right-of-Way", description: "Securing necessary permissions and land access for pipeline construction." },
        { title: "Trenching & Pipe Stringing", description: "Excavating trenches and laying out pipes along the designated route." },
        { title: "Welding & Joint Coating", description: "High-integrity welding of pipe sections and application of protective coatings." },
        { title: "Lowering-in & Backfilling", description: "Careful placement of pipes into trenches and subsequent backfilling." },
        { title: "Hydrotesting & Commissioning", description: "Pressure testing the pipeline for integrity and preparing for operation." },
        { title: "Environmental Restoration", description: "Restoring the land to its original condition after construction." }
    ],
    "Fabrication & Erection of Structural Works": [
        { title: "Structural Design & Analysis", description: "Creating robust designs and performing structural integrity assessments." },
        { title: "Material Selection & Procurement", description: "Sourcing high-grade steel and other construction materials." },
        { title: "Component Fabrication", description: "Precision cutting, drilling, and welding of structural elements." },
        { title: "Quality Control & Inspection", description: "Ensuring all fabricated components meet design specifications and standards." },
        { title: "Surface Preparation & Coating", description: "Applying protective coatings for durability and corrosion resistance." },
        { title: "On-site Assembly & Erection", description: "Safe and efficient assembly of structural frameworks at the site." },
        { title: "Load Testing & Certification", description: "Verifying structural integrity and compliance with safety regulations." }
    ],
    "Erection & Alignment of Rotary & Static Equipment": [
        { title: "Pre-installation Inspection", description: "Checking equipment for damage and verifying foundation readiness." },
        { title: "Precision Positioning", description: "Careful placement of equipment onto foundations using specialized lifting gear." },
        { title: "Laser Alignment", description: "Utilizing advanced laser tools for precise alignment of rotary equipment components." },
        { title: "Grouting & Anchoring", description: "Securing equipment to foundations with high-strength grout and anchors." },
        { title: "Connection & Integration", description: "Connecting utilities, piping, and control systems." },
        { title: "Pre-commissioning Checks", description: "Verifying all systems are ready for initial startup." },
        { title: "Performance Testing & Handover", description: "Running equipment to confirm operational parameters and efficiency." }
    ],
    "Scaffolding Work (Tubular, Hanging, Circular)": [
        { title: "Site Assessment & Planning", description: "Evaluating site conditions and designing a safe, efficient scaffolding system." },
        { title: "Material Selection & Inspection", description: "Ensuring all scaffolding components meet safety standards." },
        { title: "Erection by Certified Scaffolders", description: "Assembling scaffolding structures according to design and safety protocols." },
        { title: "Regular Safety Inspections", description: "Conducting routine checks to ensure scaffolding integrity and safety." },
        { title: "Modification & Dismantling", description: "Safely adjusting or removing scaffolding as project phases change." }
    ],
    "Static & Rotary Equipment Maintenance": [
        { title: "Diagnostic & Condition Monitoring", description: "Assessing equipment health through vibration analysis, thermography, etc." },
        { title: "Preventive Maintenance Planning", description: "Scheduling routine inspections, lubrication, and component replacements." },
        { title: "Corrective Maintenance & Repair", description: "Troubleshooting and repairing equipment malfunctions." },
        { title: "Overhaul & Refurbishment", description: "Dismantling, cleaning, repairing, and reassembling major equipment." },
        { title: "Performance Optimization", description: "Adjusting and tuning equipment for maximum efficiency and longevity." },
        { title: "Documentation & Reporting", description: "Maintaining detailed records of all maintenance activities." }
    ],
    "Plant Commissioning & Equipment Repair": [
        { title: "Pre-Commissioning Verification", description: "Checking system readiness, safety protocols, and operational procedures." },
        { title: "Initial Startup & Performance Testing", description: "Gradual initiation of plant operations and performance validation." },
        { title: "Troubleshooting & Optimization", description: "Identifying and resolving operational issues, fine-tuning processes." },
        { title: "Equipment Diagnostics & Repair", description: "Identifying faults in equipment and implementing effective repair solutions." },
        { title: "Component Replacement & Upgrade", description: "Replacing worn-out parts and upgrading systems for improved performance." },
        { title: "System Integration & Testing", description: "Ensuring newly repaired or commissioned equipment integrates seamlessly." }
    ],
    "Hydraulic Bolt Torqueing Works": [
        { title: "Joint Assessment & Calculation", description: "Determining precise torque requirements based on bolt size, material, and application." },
        { title: "Tool Calibration & Setup", description: "Calibrating hydraulic torque wrenches for accuracy and setting up equipment." },
        { title: "Controlled Tightening Sequence", description: "Applying torque in a specific, controlled sequence to ensure uniform bolt load." },
        { title: "Post-Torque Verification", description: "Checking bolt elongation or residual torque to confirm proper tightening." },
        { title: "Documentation & Certification", description: "Providing records of torque values and compliance with standards." }
    ],
    "Sandblasting, Gridblasting and Painting": [
        { title: "Surface Preparation Assessment", description: "Identifying surface conditions and selecting appropriate blasting media." },
        { title: "Containment Setup & Safety", description: "Erecting containment systems to prevent environmental contamination and ensure safety." },
        { title: "Abrasive Blasting", description: "Utilizing sandblasting or gridblasting for thorough surface cleaning and profiling." },
        { title: "Surface Inspection & Cleaning", description: "Ensuring surfaces are free from contaminants before coating application." },
        { title: "Primer Application", description: "Applying the initial protective layer for adhesion and corrosion resistance." },
        { title: "Topcoat Application", description: "Applying final paint layers for durability, aesthetics, and specific protective properties." },
        { title: "Quality Control & Curing", description: "Inspecting coating thickness and ensuring proper curing for optimal performance." }
    ],
    "Civil Works": [
        { title: "Site Survey & Geotechnical Investigation", description: "Assessing ground conditions and topography for foundation design." },
        { title: "Foundation Design & Excavation", description: "Designing and preparing foundations for structures, equipment, or pipelines." },
        { title: "Reinforcement & Concreting", description: "Installing rebar and pouring concrete for robust structural elements." },
        { title: "Structural Construction", description: "Building walls, slabs, and other civil structures." },
        { title: "Drainage & Roadwork", description: "Developing effective drainage systems and constructing access roads." },
        { title: "Finishing & Landscaping", description: "Applying surface finishes and restoring the site environment." }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
 
    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element is in view, add the 'show' class
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Stop observing the element after it has been shown
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all sections and apply the 'hidden' class initially
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Shrinking header on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            // Back to Top Button
            const backToTopButton = document.getElementById('back-to-top');
        
            if (backToTopButton) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) { // Show button after scrolling 300px
                        backToTopButton.style.display = 'block';
                    } else {
                        backToTopButton.style.display = 'none';
                    }
                });
        
                backToTopButton.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Smooth scroll to top
                    });
                });
            }
        });
    }

    // GSAP Counter Animation (if GSAP is used)
    const counters = document.querySelectorAll('.count-up');
    if (counters.length > 0 && typeof gsap !== 'undefined') { // Check if gsap is defined
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power1.inOut",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                    once: true
                }
            });
        });
    }

    // Interactive Service Explorer Logic
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const header = item.querySelector('.service-header');
        const detailsContainer = item.querySelector('.process-flow-details');
        const serviceTitle = header.querySelector('h3').textContent.trim();

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close any currently open service item (accordion behavior)
            serviceItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    gsap.to(otherItem.querySelector('.process-flow-details'), {
                        maxHeight: 0,
                        paddingTop: '0',
                        paddingBottom: '0',
                        opacity: 0,
                        duration: 0.5,
                        ease: "power1.out",
                        onComplete: () => {
                            otherItem.querySelector('.process-flow-details').innerHTML = ''; // Clear content after collapse
                        }
                    });
                }
            });

            if (!isActive) {
                item.classList.add('active');
                // Populate details container
                detailsContainer.innerHTML = generateProcessFlowHtml(serviceProcessData[serviceTitle]);

                gsap.fromTo(detailsContainer,
                    { maxHeight: 0, paddingTop: '0', paddingBottom: '0', opacity: 0 },
                    {
                        maxHeight: '500px', // A large enough value to allow content to show
                        paddingTop: '1.5rem',
                        paddingBottom: '2rem',
                        opacity: 1,
                        duration: 0.5,
                        ease: "power1.inOut",
                        onComplete: () => {
                            // Animate individual steps after the container expands
                            gsap.fromTo(detailsContainer.querySelectorAll('.process-step'),
                                { opacity: 0, y: 20 },
                                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power1.out" }
                            );
                        }
                    }
                );
            } else {
                item.classList.remove('active');
                gsap.to(detailsContainer, {
                    maxHeight: 0,
                    paddingTop: '0',
                    paddingBottom: '0',
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                    onComplete: () => {
                        detailsContainer.innerHTML = ''; // Clear content after collapse
                    }
                });
            }
        });
    });

    function generateProcessFlowHtml(steps) {
        if (!steps || steps.length === 0) {
            return '<p>No process details available for this service.</p>';
        }
        let html = '<div class="process-flow-container">';
        steps.forEach(step => {
            html += `
                <div class="process-step">
                    <div>
                        <span class="process-step-title">${step.title}</span>
                        <p class="process-step-description">${step.description}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }
});
