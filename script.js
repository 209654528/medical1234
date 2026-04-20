/* ===========================================
   第一部分：初始化与页面导航
   =========================================== */

// 页面加载完成后执行所有初始化函数
document.addEventListener('DOMContentLoaded', function() {
    console.log('医学科技网站初始化...');
    
    // 按顺序初始化所有模块
    initNavigation();
    initLanguageSwitcher();
    initTechSection();
    initDrugSimulator();
    initDiseaseSection();
    
    // 默认显示首页
    showSection('home');
    
    // 将所有界面文本更新为当前语言
    updatePageText();
});

/**
 * 1. 初始化导航栏点击功能
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 阻止链接默认跳转行为
            event.preventDefault();
            
            // 移除所有导航链接的激活状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 为当前点击的链接添加激活状态
            this.classList.add('active');
            
            // 获取要显示的部分ID并显示
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    console.log('导航功能初始化完成');
}

/**
 * 显示指定的内容部分，隐藏其他部分
 * @param {string} sectionId - 要显示部分的ID
 */
function showSection(sectionId) {
    // 隐藏所有.section元素
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标部分
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // 滚动到页面顶部（针对移动端）
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log(`切换到板块: ${sectionId}`);
    } else {
        console.error(`未找到ID为"${sectionId}"的板块`);
    }
}
/* ===========================================
   第二部分：双语切换功能
   =========================================== */

/**
 * 2. 初始化语言切换按钮
 */
function initLanguageSwitcher() {
    const langToggleButton = document.getElementById('lang-toggle');
    
    if (!langToggleButton) {
        console.error('未找到语言切换按钮');
        return;
    }
    
    // 为按钮添加点击事件
    langToggleButton.addEventListener('click', function() {
        // 在中文和英文之间切换
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        console.log(`切换到语言: ${currentLang}`);
        
        // 更新页面所有文本
        updatePageText();
        
        // 重新渲染动态内容
        renderTechCards();
        renderDrugOptions();
        updateSelectedDrugNames();
        renderDiseaseList();
        updateSelectedDiseaseInfo();
        
        // 更新按钮文字
        const langTextSpan = document.getElementById('lang-text');
        if (langTextSpan) {
            langTextSpan.textContent = (currentLang === 'zh') ? 'English' : '中文';
        }
    });
    
    console.log('双语切换功能初始化完成');
}

/**
 * 更新页面上所有可翻译的文本
 */
function updatePageText() {
    // 确保语言数据存在
    if (!translations || !translations[currentLang]) {
        console.error(`找不到${currentLang}的语言数据`);
        return;
    }
    
    const langData = translations[currentLang];
    let updatedCount = 0;
    
    // 遍历语言数据中的所有键
    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = langData[key];
            updatedCount++;
        }
    });
    
    console.log(`更新了${updatedCount}个文本元素到${currentLang}`);
}
/* ===========================================
   第三部分：科技前沿展示
   =========================================== */

/**
 * 3. 初始化科技前沿部分
 */
function initTechSection() {
    renderTechCards();
    console.log('科技前沿模块初始化完成');
}

/**
 * 渲染科技卡片到页面
 */
function renderTechCards() {
    const techContainer = document.getElementById('tech-content');
    if (!techContainer) {
        console.error('未找到科技内容容器 (#tech-content)');
        return;
    }
    
    // 清空现有内容
    techContainer.innerHTML = '';
    
    // 为每项技术创建卡片
    technologies.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.style.borderTop = `4px solid ${tech.color || '#667eea'}`;
        
        card.innerHTML = `
            <div class="tech-icon">
                <i class="${tech.icon}"></i>
            </div>
            <div class="tech-content">
                <h3>${tech.title[currentLang]}</h3>
                <p>${tech.description[currentLang]}</p >
            </div>
        `;
        
        // 添加点击效果
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`选中技术: ${tech.title[currentLang]}`);
        });
        
        techContainer.appendChild(card);
    });
    
    console.log(`渲染了${technologies.length}张科技卡片`);
}
/* ===========================================
   第四部分-A：药物模拟器初始化与选择功能
   =========================================== */

// 存储当前选中的药物
let selectedDrug1 = null;
let selectedDrug2 = null;

/**
 * 4-A. 初始化药物模拟器
 */
function initDrugSimulator() {
    renderDrugOptions();
    setupDrugSelection();
    setupSimulateButton();
    console.log('药物模拟器初始化完成');
}

/**
 * 在左右两个选择框中渲染药物选项
 */
function renderDrugOptions() {
    const container1 = document.getElementById('drug-options-1');
    const container2 = document.getElementById('drug-options-2');
    
    if (!container1 || !container2) {
        console.error('未找到药物选择容器');
        return;
    }
    
    container1.innerHTML = '';
    container2.innerHTML = '';
    
    drugs.forEach(drug => {
        const option1 = createDrugOptionElement(drug, 1);
        const option2 = createDrugOptionElement(drug, 2);
        
        container1.appendChild(option1);
        container2.appendChild(option2);
    });
    
    console.log(`渲染了${drugs.length}种药物选项`);
}

/**
 * 创建单个药物选项元素
 */
function createDrugOptionElement(drug, boxNumber) {
    const option = document.createElement('div');
    option.className = 'drug-option';
    option.dataset.drugId = drug.id;
    option.style.borderLeft = `3px solid ${drug.color || '#ddd'}`;
    
    option.innerHTML = `
        <div class="drug-icon">${drug.icon}</div>
        <div class="drug-info">
            <h4>${drug.name[currentLang]}</h4>
            <p>${drug.description[currentLang]}</p >
            <small>${drug.category ? drug.category[currentLang] : ''}</small>
        </div>
    `;
    
    option.addEventListener('click', function() {
        selectDrug(drug.id, boxNumber);
    });
    
    return option;
}

/**
 * 设置药物选择事件
 */
function setupDrugSelection() {
    console.log('药物选择事件已设置');
}

/**
 * 选中特定药物
 */
function selectDrug(drugId, boxNumber) {
    const drug = drugs.find(d => d.id === drugId);
    if (!drug) {
        console.error(`未找到ID为${drugId}的药物`);
        return;
    }
    
    if (boxNumber === 1) {
        selectedDrug1 = drug;
        console.log(`选择药物1: ${drug.name[currentLang]}`);
    } else {
        selectedDrug2 = drug;
        console.log(`选择药物2: ${drug.name[currentLang]}`);
    }
    
    updateDrugSelectionUI(boxNumber, drugId);
}

/**
 * 更新药物选择UI状态
 */
function updateDrugSelectionUI(boxNumber, drugId) {
    const allOptions = document.querySelectorAll(`#drug-options-${boxNumber} .drug-option`);
    allOptions.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(
        `#drug-options-${boxNumber} .drug-option[data-drug-id="${drugId}"]`
    );
    
    if (selectedOption) {
        selectedOption.classList.add('selected');
        selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
/* ===========================================
   第四部分-B：模拟相互作用和结果显示
   =========================================== */

/**
 * 设置模拟按钮点击事件
 */
function setupSimulateButton() {
    const simulateButton = document.getElementById('simulate-btn');
    
    if (!simulateButton) {
        console.error('未找到模拟按钮');
        return;
    }
    
    simulateButton.addEventListener('click', function() {
        simulateInteraction();
    });
    
    console.log('模拟按钮事件已设置');
}

/**
 * 模拟两种药物的相互作用
 */
function simulateInteraction() {
    if (!selectedDrug1 || !selectedDrug2) {
        const message = currentLang === 'zh' 
            ? '请先选择两种药物' 
            : 'Please select two drugs first';
        alert(message);
        return;
    }
    
    console.log(`模拟相互作用: ${selectedDrug1.name[currentLang]} + ${selectedDrug2.name[currentLang]}`);
    
    const interaction = findDrugInteraction(selectedDrug1.id, selectedDrug2.id);
    showInteractionResult(interaction);
}

/**
 * 查找两种药物间的相互作用
 */
function findDrugInteraction(id1, id2) {
    const interaction = drugInteractions.find(item => 
        (item.drug1 === id1 && item.drug2 === id2) ||
        (item.drug1 === id2 && item.drug2 === id1)
    );
    
    if (interaction) {
        console.log('找到已知相互作用');
        return interaction;
    }
    
    console.log('未找到已知相互作用，返回默认结果');
    return {
        effect: { 
            zh: "✅ 无已知严重相互作用", 
            en: "✅ No known severe interaction" 
        },
        mechanism: { 
            zh: "这两种药物没有已知的严重相互作用。但联合用药时仍需注意观察个体反应。", 
            en: "No known severe interaction between these drugs. Still monitor for individual reactions when combining." 
        },
        recommendation: {
            zh: "可遵医嘱联合使用，注意观察身体反应。",
            en: "Can be combined as prescribed, monitor for any adverse reactions."
        },
        risk: "low",
        animation: "none"
    };
}

/**
 * 显示相互作用结果
 */
function showInteractionResult(interaction) {
    const resultContainer = document.getElementById('result-container');
    const riskElement = document.getElementById('risk-level');
    const resultText = document.getElementById('result-text');
    const mechanismText = document.getElementById('mechanism-text');
    const animationContainer = document.getElementById('animation-container');
    
    if (!resultContainer || !riskElement || !resultText || !mechanismText) {
        console.error('未找到结果容器元素');
        return;
    }
    
    resultContainer.style.display = 'block';
    
    resultText.textContent = interaction.effect[currentLang];
    mechanismText.innerHTML = `
        <strong>${currentLang === 'zh' ? '作用机制:' : 'Mechanism:'}</strong> 
        ${interaction.mechanism[currentLang]}<br><br>
        <strong>${currentLang === 'zh' ? '建议:' : 'Recommendation:'}</strong> 
        ${interaction.recommendation[currentLang]}
    `;
    
    riskElement.textContent = getRiskLevelText(interaction.risk);
    riskElement.className = 'risk-level ' + interaction.risk;
    
    showInteractionAnimation(interaction.animation, animationContainer);
    
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log('相互作用结果已显示');
}

/**
 * 获取风险等级对应的显示文本
 */
function getRiskLevelText(risk) {
    if (currentLang === 'zh') {
        switch(risk) {
            case 'high': return '高风险';
            case 'medium': return '中等风险';
            case 'low': return '低风险';
            default: return '未知';
        }
    } else {
        switch(risk) {
            case 'high': return 'HIGH RISK';
            case 'medium': return 'MEDIUM RISK';
            case 'low': return 'LOW RISK';
            default: return 'UNKNOWN';
        }
    }
}
/* ===========================================
   第四部分-C：动画效果和辅助功能
   =========================================== */

/**
 * 显示相互作用的动画效果
 */
function showInteractionAnimation(type, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    switch(type) {
        case 'stomach':
            showStomachAnimation(container);
            break;
        case 'bleeding':
            showBleedingAnimation(container);
            break;
        case 'liver':
            showLiverAnimation(container);
            break;
        case 'disulfiram':
            showDisulfiramAnimation(container);
            break;
        default:
            showSafeAnimation(container);
    }
}

/**
 * 胃部损伤动画
 */
function showStomachAnimation(container) {
    container.innerHTML = `
        <div class="stomach-animation">
            <div class="stomach-organ"></div>
            <div class="drug-molecule" style="left:20%; top:30%;">💊</div>
            <div class="drug-molecule" style="left:70%; top:30%;">💊</div>
            <div class="reaction-effect">💥</div>
            <div class="damage-point" style="left:40%; top:50%;"></div>
            <div class="damage-point" style="left:55%; top:60%;"></div>
            <div class="label">${currentLang === 'zh' ? '胃黏膜' : 'Stomach'}</div>
        </div>
    `;
}

/**
 * 出血风险动画
 */
function showBleedingAnimation(container) {
    container.innerHTML = `
        <div class="bleeding-animation">
            <div class="blood-stream"></div>
            <div class="blood-drop" style="animation-delay:0s;"></div>
            <div class="blood-drop" style="animation-delay:0.5s;"></div>
            <div class="blood-drop" style="animation-delay:1s;"></div>
            <div class="warning-icon">⚠️</div>
        </div>
    `;
}

/**
 * 安全（无风险）动画
 */
function showSafeAnimation(container) {
    container.innerHTML = `
        <div class="safe-animation">
            <div class="checkmark">✓</div>
            <p>${currentLang === 'zh' ? '安全' : 'SAFE'}</p >
        </div>
    `;
}

/**
 * 肝脏损伤动画
 */
function showLiverAnimation(container) {
    container.innerHTML = `
        <div class="liver-animation">
            <div class="organ">肝</div>
            <div class="toxin" style="animation-delay:0s;">☣️</div>
            <div class="toxin" style="animation-delay:0.3s;">☣️</div>
            <div class="warning">⚠️</div>
        </div>
    `;
}

/**
 * 双硫仑样反应动画
 */
function showDisulfiramAnimation(container) {
    container.innerHTML = `
        <div class="disulfiram-animation">
            <div class="pill">💊</div>
            <div class="alcohol">🍷</div>
            <div class="reaction">💥</div>
            <div class="symptom" style="top:20%;">😫</div>
            <div class="symptom" style="top:60%;">🤢</div>
        </div>
    `;
}

/**
 * 更新已选中药物的显示名称（语言切换时用）
 */
function updateSelectedDrugNames() {
    if (selectedDrug1) {
        updateDrugSelectionUI(1, selectedDrug1.id);
    }
    if (selectedDrug2) {
        updateDrugSelectionUI(2, selectedDrug2.id);
    }
}
/* ===========================================
   第五部分：疾病百科与3D模型
   =========================================== */

// 当前选中的疾病
let selectedDisease = null;

/**
 * 5. 初始化疾病百科部分
 */
function initDiseaseSection() {
    renderDiseaseList();
    setupDiseaseSelection();
    
    console.log('疾病百科模块初始化完成');
}

/**
 * 渲染疾病列表
 */
function renderDiseaseList() {
    const diseaseListContainer = document.getElementById('disease-list');
    if (!diseaseListContainer) {
        console.error('未找到疾病列表容器');
        return;
    }
    
    // 清空现有列表
    diseaseListContainer.innerHTML = '';
    
    // 创建每个疾病项
    diseases.forEach(disease => {
        const diseaseItem = document.createElement('div');
        diseaseItem.className = 'disease-item';
        diseaseItem.dataset.diseaseId = disease.id;
        
        diseaseItem.innerHTML = `
            <span class="disease-icon">${disease.icon}</span>
            <span class="disease-name">${disease.name[currentLang]}</span>
        `;
        
        // 点击事件
        diseaseItem.addEventListener('click', function() {
            selectDisease(disease.id);
        });
        
        diseaseListContainer.appendChild(diseaseItem);
    });
    
    // 默认选中第一个疾病
    if (diseases.length > 0 && !selectedDisease) {
        selectDisease(diseases[0].id);
    }
    
    console.log(`渲染了${diseases.length}种疾病`);
}

/**
 * 设置疾病选择事件（已在renderDiseaseList中设置）
 */
function setupDiseaseSelection() {
    console.log('疾病选择事件已设置');
}

/**
 * 选择特定疾病
 */
function selectDisease(diseaseId) {
    const disease = diseases.find(d => d.id === diseaseId);
    if (!disease) {
        console.error(`未找到ID为${diseaseId}的疾病`);
        return;
    }
    
    selectedDisease = disease;
    console.log(`选择疾病: ${disease.name[currentLang]}`);
    
    // 更新UI
    updateDiseaseSelectionUI(diseaseId);
    showDiseaseInfo(disease);
    show3DModel(disease);
}

/**
 * 更新疾病选择UI状态
 */
function updateDiseaseSelectionUI(diseaseId) {
    // 移除所有激活状态
    const allItems = document.querySelectorAll('.disease-item');
    allItems.forEach(item => item.classList.remove('active'));
    
    // 激活当前选中项
    const selectedItem = document.querySelector(`.disease-item[data-disease-id="${diseaseId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
}

/**
 * 显示疾病详细信息
 */
function showDiseaseInfo(disease) {
    const infoContainer = document.getElementById('disease-info');
    if (!infoContainer) return;
    
    infoContainer.innerHTML = `
        <h3>${disease.name[currentLang]}</h3>
        <div class="disease-detail">
            <h4><i class="fas fa-info-circle"></i> ${currentLang === 'zh' ? '疾病描述' : 'Description'}</h4>
            <p>${disease.description[currentLang]}</p >
        </div>
        <div class="disease-detail">
            <h4><i class="fas fa-virus"></i> ${currentLang === 'zh' ? '病原体' : 'Pathogen'}</h4>
            <p>${disease.pathogen[currentLang]}</p >
        </div>
        <div class="disease-detail">
            <h4><i class="fas fa-stethoscope"></i> ${currentLang === 'zh' ? '治疗方法' : 'Treatment'}</h4>
            <p>${formatTreatmentText(disease.treatment[currentLang])}</p >
        </div>
    `;
}

/**
 * 格式化治疗文本（将换行符转换为HTML）
 */
function formatTreatmentText(text) {
    return text.replace(/\n/g, '<br>');
}

/**
 * 显示3D模型
 */
function show3DModel(disease) {
    const modelViewer = document.getElementById('model-viewer');
    if (!modelViewer) return;
    
    // 清空现有内容
    modelViewer.innerHTML = '';
    
    // 检查model-viewer组件是否已加载
    if (typeof customElements !== 'undefined' && 
        customElements.get('model-viewer')) {
        
        // 创建3D模型查看器
        const modelElement = document.createElement('model-viewer');
        modelElement.src = disease.modelUrl;
        modelElement.alt = `${disease.name[currentLang]} 3D模型`;
        modelElement.setAttribute('auto-rotate', '');
        modelElement.setAttribute('camera-controls', '');
        modelElement.setAttribute('ar', '');
        modelElement.setAttribute('environment-image', 'neutral');
        modelElement.setAttribute('shadow-intensity', '1');
        modelElement.style.width = '100%';
        modelElement.style.height = '100%';
        modelElement.loading = 'eager';
        
        modelViewer.appendChild(modelElement);
        
        // 添加加载状态处理
        modelElement.addEventListener('load', () => {
            console.log(`3D模型加载成功: ${disease.name[currentLang]}`);
        });
        
        modelElement.addEventListener('error', (err) => {
            console.error(`3D模型加载失败:`, err);
            showModelPlaceholder(modelViewer, disease);
        });
        
    } else {
        // 如果model-viewer组件未加载，显示占位符
        console.warn('model-viewer组件未加载，显示占位符');
        showModelPlaceholder(modelViewer, disease);
    }
}

/**
 * 显示模型占位符
 */
function showModelPlaceholder(container, disease) {
    container.innerHTML = `
        <div class="model-placeholder">
            <i class="fas fa-virus fa-4x"></i>
            <p>${disease.name[currentLang]}</p >
            <p><small>${currentLang === 'zh' ? '3D模型加载中...' : '3D Model Loading...'}</small></p >
        </div>
    `;
}

/**
 * 更新选中的疾病信息（语言切换时用）
 */
function updateSelectedDiseaseInfo() {
    if (selectedDisease) {
        showDiseaseInfo(selectedDisease);
    }
}

// 简化版的动画显示函数（补充第四部分）
function showLiverAnimation(container) {
    container.innerHTML = `
        <div class="liver-animation">
            <div class="organ">肝</div>
            <div class="toxin" style="animation-delay:0s;">☣️</div>
            <div class="toxin" style="animation-delay:0.3s;">☣️</div>
            <div class="warning">⚠️</div>
        </div>
    `;
}

function showDisulfiramAnimation(container) {
    container.innerHTML = `
        <div class="disulfiram-animation">
            <div class="pill">💊</div>
            <div class="alcohol">🍷</div>
            <div class="reaction">💥</div>
            <div class="symptom" style="top:20%;">😫</div>
            <div class="symptom" style="top:60%;">🤢</div>
        </div>
    `;
}